import axios from "axios";
import { position } from "./MapMarker";
const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json";

const REACT_APP_GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
export const GetAddress = async ({ lat, long }: position) => {
  const latlng = `${lat},${long}`;
  try {
    const res = await axios.get(
      `${BASE_URL}?latlng=${latlng}&&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`
    );
    return res.data.results[0].formatted_address;
  } catch (error) {
    console.error(error);
    return "Error retrieving address";
  }

};

