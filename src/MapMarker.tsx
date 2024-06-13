import React, { useState } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

import cat from "./img/SVG/cat.svg";

interface position {
  lat: number;
  long: number;
}

export const MapMarker = ({ lat, long }: position) => {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={{ lat: lat, lng: long }}
        title={"Cat."}
      >
        <Pin background={"#22ccff"} borderColor={"#1e89a1"} scale={1.4}>
          <img src={cat} alt="Logo" width="25" />
        </Pin>
      </AdvancedMarker>
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}
        >
          Latitude: {lat}, Longitude: {long}
        </InfoWindow>
      )}
    </>
  );
};
