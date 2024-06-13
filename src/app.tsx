import React from 'react';
import {createRoot} from 'react-dom/client';

import {
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';


import {MapMarker} from './MapMarker';

const API_KEY =
  globalThis.GOOGLE_MAPS_API_KEY ?? (process.env.GOOGLE_MAPS_API_KEY as string);
const startLocation = {lat: -45.88155086102622, lng: 170.497564650982};
const App = () => {
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
        <MapMarker lat={startLocation.lat} long={startLocation.lng}/>
      </Map>

    </APIProvider>




    </div>
  );
};

export default App;

export function renderToDom(container: HTMLElement) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
