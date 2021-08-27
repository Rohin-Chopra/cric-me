import factApi from "../api/factApi";

const fetchFact = async () => {
  const response = await factApi.get("/");
  return response.data.fact;
};
export default fetchFact;
