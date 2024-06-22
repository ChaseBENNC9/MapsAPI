import React, { useState } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

import { GetAddress } from "./GetAddress";
export interface position {
  lat: number;
  lng: number;
}

export const MapMarker = ({ lat, lng }: position) => {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [address, setAddress] = useState("");
  const [markerRef, marker] = useAdvancedMarkerRef();
  GetAddress({ lat, lng }).then((res) => setAddress(res));
  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={{ lat: lat, lng: lng }}
        title={address}
      >
        <p style={{fontSize: "45px" , margin: "0"}}>🐈‍⬛</p>
      </AdvancedMarker>
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}
        >
          {address}
        </InfoWindow>
      )}
    </>
  );
};
