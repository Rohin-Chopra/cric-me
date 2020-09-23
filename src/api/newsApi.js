import axios from "axios";

export default axios.create({
  baseURL: "http://newsapi.org/v2/top-headlines",
});

export const newsApiKey = "c004351f1d76402d8d45833b9a8e3e25";
