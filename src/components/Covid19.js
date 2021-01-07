import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Legend from './Legend';
import CovidMap from './CovidMap'

const Covid19 = () => {

    const [countries, setCountries] = useState([]);

    return (
        <div>
            {countries.length === 0 ? <Loading/> : <div><Legend/> <CovidMap/></div>}
        </div>
    )


};

export default Covid19;