import {features} from '../data/countries';

class LoadCountriesTask {
    load = (setState) => {
        setState(features)
    };
}

export default LoadCountriesTask;