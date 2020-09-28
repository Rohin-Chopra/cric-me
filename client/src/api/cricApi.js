import axios from "axios";

import { cricApiKey } from "./config";

export default axios.create({ baseURL: "https://cricapi.com/api" });
export { cricApiKey };
