import React from 'react';
import {createRoot} from 'react-dom/client';

import {
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';


import {MapMarker} from './MapMarker';
import { position } from './MapMarker';
const API_KEY =
  globalThis.REACT_APP_GOOGLE_MAPS_API_KEY ?? (process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string);
const DisplayMap = (position : position) => {
const startLocation = position;
  return (
    <div
    style={{
      width: '100%',
      height: '50%',
      position: 'absolute',
      top: 0,
      left: 0,
      background: '#1dbe80',
      border: '2px solid #0e6443',
      transform: 'translate(0, 25%)'
    }}>


    <APIProvider apiKey={API_KEY} libraries={['marker']}>
      <Map
        mapId={'bf51a910020fa25a'}
        defaultZoom={20}
        defaultCenter={startLocation} //-45.88265086102621, 170.497564650982
        gestureHandling={'greedy'}
        disableDefaultUI>

  
          

        {/* simple stateful infowindow */}
        <MapMarker lat={startLocation.lat} lng={startLocation.lng}/>
      </Map>

    </APIProvider>




    </div>
  );
};

export default DisplayMap;


