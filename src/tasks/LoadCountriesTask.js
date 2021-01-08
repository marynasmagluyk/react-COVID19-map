import papa from 'papaparse'
import {features} from '../data/countries';

class LoadCountriesTask {

    covidDataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv';

    setState = null;

    load = (setState) => {
        this.setState = setState;
        papa.parse(this.covidDataUrl, {
            download: true,
            header: true,
            complete: (result) => this.#processCovidData(result.data),
        });
    };

    #processCovidData = (covidCountries) => {
        features.map((country) => {
            const covidCountry = covidCountries.find(
                (covidCountry) => country.properties.ISO_A3 === covidCountry.ISO3
            );
            country.properties.confirmed = 0;
            country.properties.confirmedText = 0;

            if (covidCountry != null) {
                let confirmed = Number(covidCountry.Confirmed);
                country.properties.confirmed = confirmed;
                country.properties.confirmedText = this.#formatNumberWithCommas(confirmed);
            }
        });

        this.setState(features);
    };
    #formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
}

export default LoadCountriesTask;