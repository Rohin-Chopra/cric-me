import React from "react";
import { Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import cricApi, { cricApiKey } from "../../api/cricApi";
import newsApi, { newsApiKey } from "../../api/newsApi";
import DynamicInput from "../../components/DynamicPlaceholder";
import Card, { CardHeader } from "../../components/Card";
import MatchCard from "../../components/MatchCard";
import NewsCard from "../../components/NewsCard";

import {
  FactPlaceholder,
  MatchCardPlaceholderList,
  NewsCardPlaceholderList,
} from "../../components/Placeholders";
import { formatDate } from "../../utils";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articlesLoading: true,
      recentMatches: [],
      recentMatchesLoading: true,
      upcomingMatchesLoading: true,
      upcomingMatches: [],
      fact: false,
      factLoading: true,
    };
  }

  parseTeamScore = (score = "", teams) => {
    if (score === "") return "";
    const scoreArray = score.split(" ");
    let prevEl = 0;
    const scoresForTeams = [];
    for (let i = 0; i < scoreArray.length; i++) {
      if (scoreArray[i].includes("/")) {
        if (prevEl === 0) {
          scoresForTeams.push(scoreArray.slice(i, i + 1).join(" "));
        } else {
          scoresForTeams.push(
            scoreArray.slice(i, i.length).find((el) => {
              return el.includes("/");
            })
          );
        }
        prevEl = i + 1;
        scoreArray.splice(scoreArray.indexOf("v"), 1);
      }
    }
    return scoresForTeams;
  };

  fetchRecentMatchesScores = async () => {
    const data = this.state.recentMatches.map(async (match) => {
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
    this.setState({ recentMatches: dataWithPromiseResolved });
    console.log(dataWithPromiseResolved);
  };
  fetchRecentMatches = async () => {
    const response = await cricApi.get("/matches", {
      params: { apikey: cricApiKey },
    });
    const upcomingMatches = [];
    const recentMatches = response.data.matches
      .filter((match) => {
        if (match.matchStarted) {
          return match;
        }
        upcomingMatches.push(match);
      })
      .filter((el, index) => index < 2);
    this.setState({ recentMatchesLoading: false });
    this.setState({ recentMatches: recentMatches });
    this.setState({ upcomingMatchesLoading: false });
    this.setState({ upcomingMatches: upcomingMatches });
    this.fetchRecentMatchesScores();
  };
  renderRecentMatches = () => {
    return this.state.recentMatches.map((match) => {
      console.log(match);
      const scores = match.stat
        ? this.parseTeamScore(match.score, [match["team-1"], match["team-2"]])
        : ["", ""];
      return (
        <div className="shadow-dark w-100 mb-1">
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
            key={match.unique_id}
          />
        </div>
      );
    });
  };

  renderUpcomingMatches = () => {
    return this.state.upcomingMatches
      .filter((match, index) => index < 3)
      .map((match, index) => {
        if (index) {
        }
        return (
          <div className="shadow-dark w-100 mb-1">
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
  fetchFact() {
    this.setState({fact:''})
    this.setState({ factLoading: true });
    setTimeout(() => {
      this.setState({ fact: true });
      this.setState({ factLoading: false });
    }, 1000);
  }
  fetchNews = async () => {
    const response = newsApi.get("/", {
      params: {
        apiKey: newsApiKey,
        sources: "espn-cric-info",
      },
    });
    const articles = (await response).data.articles;
    this.setState({ articlesLoading: false });
    this.setState({ articles: articles });
  };
  renderNewsCards = () => {
    return this.state.articles
      .filter((match, index) => index < 3)
      .map((article) => {
        return (
          <NewsCard
            imgURL={article.urlToImage}
            title={article.title}
            subtitle={article.description}
            link={article.url}
          />
        );
      });
  };
  renderFact() {
    return this.state.fact ? (
      <>
        <p>
          In 1997 Women’s world cup, Belinda Clark hit a double ton and made
          unbeaten 229 against Denmark.
        </p>
        <Button className="mr-3" onClick={()=>this.fetchFact()}>Get Another Fact</Button>
      </>
    ) : null;
  }
  componentDidMount() {
    this.fetchFact();
    this.fetchRecentMatches();
    this.fetchNews();
  }
  render() {
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
            <div className="search-bar-btns">
              {" "}
              <Button className="mr-3">Search Player</Button>
              <Button>Get a random player</Button>
            </div>
          </Card>
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center my-2">
          <Card className="rounded">
            <h3>Fact For today</h3>
            <FactPlaceholder loading={this.state.factLoading} />
            {this.renderFact()}
          </Card>
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center mt-1 flex-column">
          <CardHeader className=" rounded-top card-header w-80">
            <p className="mb-0 font-weight-bold">Results Of Matches</p>
          </CardHeader>
          <MatchCardPlaceholderList
            loading={this.state.recentMatchesLoading}
            count={4}
          />
          {this.renderRecentMatches()}
          <Button className="my-2">View More</Button>
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center mt-2 flex-column">
          <CardHeader className=" rounded-top card-header w-80">
            <p className="mb-0 font-weight-bold">Upcoming</p>
          </CardHeader>
          <MatchCardPlaceholderList
            loading={this.state.upcomingMatchesLoading}
            count={4}
          />
          {this.renderUpcomingMatches()}
          <Button className="my-2">View More</Button>
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center mt-2 flex-column">
          <CardHeader className=" rounded-top card-header w-80">
            <p className="mb-0 font-weight-bold">News</p>
          </CardHeader>
          <NewsCardPlaceholderList
            loading={this.state.articlesLoading}
            count={4}
          />
          {this.renderNewsCards()}
          <Button className="my-2">View More</Button>
        </div>
      </div>
    );
  }
}
export default Home;

/* <MatchCard
            isDone
            location="Stadium, Location"
            team1={{ name: "team1", score: "192/8" }}
            team2={{ name: "team2", score: "192/8" }}
            matchFooter="Team won by 8 wickets"
          />
          <MatchCard
            isDone
            location=""
            team1={{ name: "", score: "" }}
            team2={{ name: "", score: "" }}
            matchFooter=""
          /> */

/* <div className="w-100 d-flex align-items-center justify-content-center mt-1 flex-column">
          <CardHeader className=" rounded-top card-header w-80">
            <p className="mb-0 font-weight-bold">Results Of Matches</p>
          </CardHeader>
          {this.renderRecentMatches()}
          <Button className="my-2">View More</Button>
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center mt-2 flex-column">
          <CardHeader className=" rounded-top card-header w-80">
            <p className="mb-0 font-weight-bold">Upcoming</p>
          </CardHeader>
          {this.renderUpcomingMatches()}
          <Button className="my-2">View More</Button>
        </div> */
