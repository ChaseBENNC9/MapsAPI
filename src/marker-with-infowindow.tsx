import React, {useState} from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

interface position {
  /** The text to display inside the button */
  lat: number;
  /** Whether the button can be interacted with */
  long: number;
}

export const MarkerWithInfowindow = ({lat,long} : position) => {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={{lat: lat, lng: long}}
        title={'AdvancedMarker that opens an Infowindow when clicked.'}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}>
            Latitude: {lat}, Longitude: {long}
        </InfoWindow>
      )}
    </>
  );
};
