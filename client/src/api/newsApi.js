import axios from "axios";
import { newsApiKey } from "./config";


export default axios.create({
  baseURL: 'https://newsapi.org/v2/everything',
});

export { newsApiKey };
