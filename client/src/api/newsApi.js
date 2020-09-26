import axios from "axios";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export default axios.create({
  baseURL: `${proxyUrl}https://gnews.io/api/v4/search`,
});

export const newsApiKey = "663aee80a9b05c6e2bdfebdd08c4bde8";
