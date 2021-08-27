import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import Card from "../Card";
import { CardHeader } from "../Card";

const MatchCard = ({
  location,
  team1,
  team2,
  matchFooter,
  isDone,
  date = "",
  winnerTeam = "",
}) => {
  const scores = () => {
    return isDone
      ? [<span>{team1.score}</span>, <span>{team2.score}</span>]
      : [null, null];
  };
  const renderTrophy = (team) => {
    return team === winnerTeam ? (
      <FontAwesomeIcon className='ml-1 text-success' icon={faTrophy} />
    ) : null;
  };
  return (
    <React.Fragment>
      <Card style={{ borderRadius: "0" }}>
        <div className='match-card-header'>
          <p className='font-weight-bold mb-0'>
            {isDone ? "Result" : "Scheduled"}
          </p>
          <p className='text-secondary'>{location}</p>
        </div>
        <div className='d-flex justify-content-between mb-2'>
          <span>
            {team1.name}
            {renderTrophy(team1.name)}
          </span>
          {[scores()[0]]}{" "}
        </div>
        <div className='d-flex justify-content-between'>
          <span>
            {team2.name}
            {renderTrophy(team2.name)}
          </span>
          {[scores()[1]]}{" "}
        </div>
      </Card>
      <CardHeader>
        <p className='mb-0'>{matchFooter}</p>
      </CardHeader>
    </React.Fragment>
  );
};
export default MatchCard;
