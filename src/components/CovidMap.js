import React from 'react';
import {Map, GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './CovidMap.css'

const CovidMap = ({countries}) => {

    const mapStyle = {
        fillColor: 'white',
        weight: 1,
        color: 'grey',
        fillOpacity: 1,
    };

    return (
            <Map style={{height: '90vh'}}
                          zoom={3}
                          center={[40, 10]}>
                <GeoJSON style={mapStyle} data={countries}/>
            </Map>
    )
};

export default CovidMap;