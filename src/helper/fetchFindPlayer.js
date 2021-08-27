import cricApi, { cricApiKey } from "../api/cricApi";

const fetchFindPlayer = async (playerName) => {
  const response = await cricApi.get("/playerFinder", {
    params: {
      apikey: process.env.REACT_APP_CRICKET_API_KEY,
      name: playerName,
    },
  });
  return response.data.data;
};

export default fetchFindPlayer;
