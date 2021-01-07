import React from 'react';
import styled from 'styled-components';
import {MapContainer, GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const CovidMap = ({countries}) => {
    //console.log(countries);
    return (
        <Wrapper>
            <MapContainer style={{height: '90vh'}}
                          zoom={2}
                          center={[20, 100]}>
                <GeoJSON className='geo' data={countries}/>
            </MapContainer>
        </Wrapper>
    )
};

const Wrapper = styled.article`
.geo {
fill-color: white;
}
`;

export default CovidMap;