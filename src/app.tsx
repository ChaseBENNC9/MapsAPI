import React from 'react';
import {createRoot} from 'react-dom/client';

import {
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';


import {MapMarker} from './MapMarker';
import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';
import DisplayMap from './DisplayMap';

// Custom hook to get query parameters
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Utility function to safely parse a float
function parseQueryFloat(value: string | null, defaultValue: number): number {
  if (value === null) {
    return defaultValue;
  }
  const parsed = parseFloat(value);
  return isNaN(parsed) ? defaultValue : parsed;
}

const CoordinatesDisplay: React.FC = () => {
  const query = useQuery();
  const defaultLat = 40.7128;  // Default latitude (e.g., New York City)
  const defaultLong = -74.0060; // Default longitude (e.g., New York City)
  
  // Log query parameters for debugging
  console.log('Query params:', query.toString());

  // Safely parse query parameters
  const lat = parseQueryFloat(query.get("lat"), defaultLat);
  const long = parseQueryFloat(query.get("long"), defaultLong);

  // Log parsed values for debugging
  console.log('Parsed lat:', lat, 'Parsed long:', long);

  return (
    <DisplayMap lat={lat} lng={long}/>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoordinatesDisplay />} />
      </Routes>
    </Router>
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
