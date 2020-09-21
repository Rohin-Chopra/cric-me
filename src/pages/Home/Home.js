import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import cricApi, { apiKey } from "../../api/cricApi";

import DynamicInput from "../../components/DynamicPlaceholder";
import Card, { CardHeader } from "../../components/Card";
import MatchCard from "../../components/MatchCard";
import "./Home.css";

const Home = () => {
  const fetchRecentMatchesScores = () => {
    console.log(recentMatches);
    const data = recentMatches.map(async (match) => {
      if (match.matchStarted) {
        const response = await cricApi.get("/cricketScore", {
          params: {
            apikey: apiKey,
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
    setRecentMatches(data);
  };
  const fetchRecentMatches = async () => {
    const response = await cricApi.get("/matches", {
      params: { apikey: apiKey },
    });
    setRecentMatches(response.data.matches);
    console.log(recentMatches);
    // fetchRecentMatchesScores();
  };
  const renderRecentMatches = () => {
    return recentMatches.map((match) => {
      return (
        <MatchCard
          isDone={match.matchStarted}
          location="Stadium, Location"
          team1={{ name: match["team-1"], score: "192/8" }}
          team2={{ name: match["team-2"], score: "192/8" }}
          matchFooter="Team won by 8 wickets"
          key={match.unique_id}
        />
      );
    });
  };
  const [recentMatches, setRecentMatches] = useState([]);
  useEffect(() => {
    fetchRecentMatches();
  }, []);
  return (
    <div className="container d-flex align-items-center justify-content-center flex-column">
      <div className="w-100 d-flex align-items-center justify-content-center">
        <Card
          className="text-center mt-2 rounded"
          bodyClassName="d-flex flex-column align-items-center justify-content-center"
        >
          <h2>Which Player Do you Want to look at?</h2>
          <InputGroup className="mb-3" id="search-bar">
            <InputGroup.Prepend>
              <InputGroup.Text id="player-name">
                <FontAwesomeIcon icon={faSearch} />{" "}
              </InputGroup.Text>
            </InputGroup.Prepend>
            <DynamicInput
              className="bg-primary form-control"
              options={["Dhoni", "Sachin", "Kohli", "Pant"]}
            />
          </InputGroup>
          <div>
            {" "}
            <Button className="mr-3">Search Player</Button>
            <Button>Get a random player</Button>
          </div>
        </Card>
      </div>

      <div className="w-100 d-flex align-items-center justify-content-center my-2">
        <Card className="rounded">
          <h3>Fact For today</h3>
          <p>
            In 1997 Women’s world cup, Belinda Clark hit a double ton and made
            unbeaten 229 against Denmark.
          </p>
          <Button className="mr-3">Get Another Fact</Button>
        </Card>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center my-2 flex-column">
        <CardHeader className=" rounded-top card-header">
          <p className="mb-0 font-weight-bold">Results Of Matches</p>
        </CardHeader>
        <MatchCard
          isDone
          location="Stadium, Location"
          team1={{ name: "team1", score: "192/8" }}
          team2={{ name: "team2", score: "192/8" }}
          matchFooter="Team won by 8 wickets"
        />
        {renderRecentMatches()}
        <Button className="my-2">View More</Button>
      </div>
    </div>
  );
};
export default Home;
