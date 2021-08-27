import axios from "axios";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export default axios.create({ baseURL: `${proxyUrl}https://cricapi.com/api` });
