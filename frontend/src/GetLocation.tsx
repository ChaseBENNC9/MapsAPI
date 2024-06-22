import axios from "axios";
const BASE_URL = "http://192.168.68.65:3001";

export const GetLocation = async () => {
// Get Formatted address from lat and lng
  try {
    const res = await axios.get(`${BASE_URL}/api/data`);
    return res.data;
  } 
  catch (error) {
    console.error(error);
    return "Error retrieving address";
  }

};

