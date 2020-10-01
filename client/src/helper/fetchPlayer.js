import cricApi, { criApiKey, cricApiKey } from "../api/cricApi";

const fetchPlayer = (id) => {
  const responnes = cricApi.get("/playerStats", {
    pid: id,
    apikey: cricApiKey,
  });
  console.log(responnes)
};
