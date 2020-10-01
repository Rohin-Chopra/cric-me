import cricApi, { cricApiKey } from "../api/cricApi";

const fetchPlayer = async (id) => {
  const response = await cricApi.get("/playerStats", {
    params: {
      pid: id,
      apikey: cricApiKey,
    },
  });
  return response.data;
};

export default fetchPlayer;
