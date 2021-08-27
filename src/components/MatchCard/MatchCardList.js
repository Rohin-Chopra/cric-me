import React from "react";

import MatchCard from "./MatchCard";
import { formatDate, parseTeamScore } from "../../utils";
export const recentMatchList = (recentMatches) => {
  return recentMatches.map((match) => {
    const scores = match.stat
      ? parseTeamScore(match.score, [match["team-1"], match["team-2"]])
      : ["", ""];
    const winnerTeam = match.winner_team ? match.winner_team : "";
    return (
      <div className="shadow-dark w-100 mb-1" key={match.unique_id}>
        <MatchCard
          isDone={match.matchStarted}
          location="Stadium, Location"
          team1={{
            name: match["team-1"],
            score: match.matchStarted && match.stat ? scores[0] : "",
          }}
          team2={{
            name: match["team-2"],
            score: match.matchStarted && match.stat ? scores[1] : "",
          }}
          matchFooter={match.stat === "" ? "" : match.stat}
          winnerTeam={winnerTeam !== "" ? winnerTeam : ""}
        />
      </div>
    );
  });
};

export const upcomingMatchList = (upcomingMatches) => {
  return upcomingMatches.map((match, index) => {
    if (index) {
    }
    return (
      <div className="shadow-dark w-100 mb-1" key={match.unique_id}>
        <MatchCard
          isDone={false}
          location="Stadium, Location"
          team1={{
            name: match["team-1"],
          }}
          team2={{
            name: match["team-2"],
          }}
          matchFooter={formatDate(match.date)}
          key={match.unique_id}
        />
      </div>
    );
  });
};
