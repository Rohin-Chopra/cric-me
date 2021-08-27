import cricApi, { cricApiKey } from "../api/cricApi";

const fetchMatches = async () => {
  const response = await cricApi.get("/matches", {
    params: { apikey: cricApiKey },
  });
  const upcomingMatches = [];
  const recentMatches = response.data.matches.filter((match) => {
    if (match.matchStarted) {
      return match;
    }
    upcomingMatches.push(match);
  });
  return [recentMatches, upcomingMatches];
};

export default fetchMatches;
