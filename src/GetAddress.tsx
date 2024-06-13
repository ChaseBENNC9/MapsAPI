import axios from "axios";
import React from "react";
import { position } from "./MapMarker";
import { c } from "vite/dist/node/types.d-aGj9QkWt";
const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json";

const REACT_APP_GOOGLE_MAPS_API_KEY = "AIzaSyCHOTo5ICQeJQ3w3ZyosT71PGB05Zcvm2U";
export const GetAddress = async ({ lat, long }: position) => {
  const latlng = `${lat},${long}`;
  try {
    const res = await axios.get(
      `${BASE_URL}?latlng=${latlng}&&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    return res.data.results[0].formatted_address;
  } catch (error) {
    console.log(error);
  }

};

