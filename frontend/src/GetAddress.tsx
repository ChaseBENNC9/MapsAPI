import axios from "axios";
import { position } from "./MapMarker";
const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json";

const REACT_APP_GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// Get Formatted address from lat and lng
export const GetAddress = async ({ lat, lng }: position) => {
  const latlng = `${lat},${lng}`;
  try {
    const res = await axios.get(
      `${BASE_URL}?latlng=${latlng}&result_type=street_address&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    console.log( `${BASE_URL}?latlng=${latlng}&location_type=ROOFTOP&result_type=street_address&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`);
    return`${ res.data.results[0]["address_components"][0]["short_name"]} ${res.data.results[0]["address_components"][1]["short_name"]}`;
  } catch (error) {
    console.error(error);
    return "Error retrieving address";
  }

};

