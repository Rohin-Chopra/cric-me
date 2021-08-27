import axios from "axios";

import { cricApiKey } from "./config";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export default axios.create({ baseURL: `${proxyUrl}https://cricapi.com/api` });
export { cricApiKey };
