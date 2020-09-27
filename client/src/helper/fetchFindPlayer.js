import cricApi, { cricApiKey } from "../api/cricApi";

const fetchFindPlayer = async (playerName) => {
  const response = await cricApi.get("/playerFinder", {
    params: {
      apikey: cricApiKey,
      name: playerName,
    },
  });
  return response.data;
};

export default fetchFindPlayer;
