import axios from "axios";

export default axios.create({
  baseURL: "https://cricket-facts-api.herokuapp.com",
});

export const factApiKey = "";
