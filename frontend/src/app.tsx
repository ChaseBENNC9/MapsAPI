import React, { useState, useEffect  } from "react";
import {createRoot} from 'react-dom/client';

import {
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';


import {MapMarker} from './MapMarker';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import DisplayMap from './DisplayMap';
import { GetLocation } from './GetLocation';






const App  = () => {

  const [location,setLocation] = useState<string>("-45.88155086102622,170.497564650982")
  
useEffect(() => {

  const CoordinatesDisplay = () => {
     GetLocation().then((res) => setLocation(res.data));
    
  }
  CoordinatesDisplay();



},[]);
  return (
    <>
    <DisplayMap position={location} />
    </>
  );
}

export default App;

export function renderToDom(container: HTMLElement) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
