import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Button, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  fetchNews,
  fetchFact,
  fetchMatches,
  fetchMatchesScores,
  fetchFindPlayer,
} from "../../helper";
import DynamicInput from "../../components/DynamicPlaceholder";
import Card, { CardHeader } from "../../components/Card";
import { upcomingMatchList, recentMatchList } from "../../components/MatchCard";
import { newsCardList } from "../../components/NewsCard";

import {
  FactPlaceholder,
  MatchCardPlaceholderList,
  NewsCardPlaceholderList,
} from "../../components/Placeholders";
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
      fact: "",
      redirect: false,
      factLoading: true,
      playerInputValue: "",
    };
  }

  getMatchesScores = async () => {
    const recentMatchesWithScores = await fetchMatchesScores(
      this.state.recentMatches
    );
    this.setState({ recentMatches: recentMatchesWithScores });
  };

  getMatches = async () => {
    const [recentMatches, upcomingMatches] = await fetchMatches();
    this.setState({ recentMatchesLoading: false });
    this.setState({
      recentMatches: recentMatches.filter((match, index) => index < 3),
    });
    this.setState({ upcomingMatchesLoading: false });
    this.setState({
      upcomingMatches: upcomingMatches.filter((match, index) => index < 3),
    });
    this.getMatchesScores();
  };
  renderRecentMatches = () => {
    return recentMatchList(this.state.recentMatches);
  };

  renderUpcomingMatches = () => {
    return upcomingMatchList(this.state.upcomingMatches);
  };
  getNews = async () => {
    const articles = await fetchNews();
    this.setState({ articlesLoading: false });
    this.setState({ articles: articles.filter((match, index) => index < 3) });
  };

  renderNewsCards = () => {
    return newsCardList(
      this.state.articles.filter((match, index) => index < 3)
    );
  };
  getFact = async () => {
    this.setState({ fact: "" });
    this.setState({ factLoading: true });
    const fact = await fetchFact();
    this.setState({ fact: fact });
    this.setState({ factLoading: false });
  };
  renderFact() {
    return (
      <>
        <p>{this.state.fact}</p>
        <Button className="mr-3" onClick={() => this.getFact()}>
          Get Another Fact
        </Button>
      </>
    );
  }
  handleSearchChange = (e) => {
    this.setState({ playerInputValue: e.target.value });
  };
  handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      this.handleSearch(e.target.value);
    }
  };
  handleSearch = async (q) => {
    // const searchedPlayers = await fetchFindPlayer(q);
    // console.log(searchedPlayers);
    this.setState({ redirect: true });
  };
  componentDidMount() {
    this.getFact();
    // this.getMatches();
    this.getNews();
  }
  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center flex-column">
        {this.state.redirect ? (
          <Redirect
            to={{
              pathname: `/players/search/${this.state.playerInputValue}`,
              state: { player: 1 },
            }}
          />
        ) : null}
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
                value={this.state.playerInputValue}
                onChange={this.handleSearchChange}
                onKeyDown={(e) => this.handleSearchKeyDown(e)}
                className="bg-primary form-control"
                options={["Dhoni", "Sachin", "Kohli", "Pant"]}
              />
            </InputGroup>
            <div className="search-bar-btns">
              {" "}
              <Button className="mr-3" onClick={this.handleSearch}>
                Search Player
              </Button>
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
          <Link to="/news">
            <Button className="my-2">View More</Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;
