import axios from "axios";
import { newsApiKey } from "./config";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export default axios.create({
  baseURL: `${proxyUrl}https://gnews.io/api/v4/search`,
});

export { newsApiKey };
