import cricApi, { cricApiKey } from "../api/cricApi";

const fetchMatches = async () => {
  const response = await cricApi.get("/matches", {
    params: { apikey: process.env.REACT_APP_CRICKET_API_KEY },
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
