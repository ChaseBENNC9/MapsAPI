/**
 * @summary Generic Table that contains re-usable functions for Creating,Updating, Retrieving and Deleting Data
 * @author Chase Bennett-Hill
 */
import axios from "axios";
import React from "react";
import { env } from "process";
import dotenv from "dotenv";
import { position } from "./MapMarker";
const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json";

dotenv.config();
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export const GetAddress = ({ lat, long }: position) => {
  const latlng = `${lat},${long}`;
  axios
    .get(`${BASE_URL}?latlng=${latlng}&&key=${GOOGLE_MAPS_API_KEY}`)
    .then((response) => {
      console.log(response);
    })

    .catch((error) => console.log(error));

  return <>
    <h1>HI</h1>
    
        </>;
};
