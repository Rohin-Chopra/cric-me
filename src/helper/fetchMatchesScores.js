import cricApi, { cricApiKey } from "../api/cricApi";

const fetchMatchesScores = async (matches) => {
  const data = matches.map(async (match) => {
    if (match.matchStarted) {
      const response = await cricApi.get("/cricketScore", {
        params: {
          apikey: cricApiKey,
          unique_id: match.unique_id,
        },
      });
      return {
        ...match,
        stat: response.data.stat,
        score: response.data.score,
      };
    }
    return match;
  });
  const dataWithPromiseResolved = await Promise.all(data);
  return dataWithPromiseResolved;
};

export default fetchMatchesScores;
