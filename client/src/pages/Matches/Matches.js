import React from "react";
import { Button } from "react-bootstrap";

import { fetchMatches, fetchMatchesScores } from "../../helper";
import { upcomingMatchList, recentMatchList } from "../../components/MatchCard";
import { CardHeader } from "../../components/Card";
import { MatchCardPlaceholderList } from "../../components/Placeholders";

class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentMatches: [],
      recentMatchesLoading: true,
      upcomingMatchesLoading: true,
      upcomingMatches: [],
      viewing: "all",
    };
  }

  buttonConfig = ["all", "recent", "upcoming"];

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
      recentMatches: recentMatches,
    });
    this.setState({ upcomingMatchesLoading: false });
    this.setState({
      upcomingMatches: upcomingMatches,
    });
    this.getMatchesScores();
  };
  renderUpcomingMatchCards = () => {
    return upcomingMatchList(this.state.upcomingMatches);
  };
  renderRecentMatches = () => {
    return recentMatchList(this.state.recentMatches);
  };

  renderViewMatchTypeButtons = () => {
    return this.buttonConfig.map((type) => {
      return (
        <Button
          className="mr-2"
          variant={this.state.viewing === type ? "secondary" : "primary"}
          onClick={() => {
            this.handleMatchTypeClick(type);
          }}
        >
          {" "}
          {type}
        </Button>
      );
    });
  };

  componentDidMount() {
    this.getMatches();
  }
  handleMatchTypeClick(type) {
    this.setState({ viewing: type });
  }
  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center flex-column my-2">
        <div className="align-self-start">
          View {this.renderViewMatchTypeButtons()}
        </div>
        {this.state.viewing === "recent" || this.state.viewing === "all" ? (
          <div className="w-100 d-flex align-items-center justify-content-center mt-2 flex-column">
            <CardHeader className=" rounded-top card-header w-80">
              <p className="mb-0 font-weight-bold">Recent Matches</p>
            </CardHeader>
            <MatchCardPlaceholderList
              loading={this.state.recentMatchesLoading}
              count={4}
            />
            {this.renderRecentMatches()}
          </div>
        ) : null}
        {this.state.viewing === "upcoming" || this.state.viewing === "all" ? (
          <div className="w-100 d-flex align-items-center justify-content-center mt-2 flex-column">
            <CardHeader className=" rounded-top card-header w-80">
              <p className="mb-0 font-weight-bold">Upcoming</p>
            </CardHeader>
            <MatchCardPlaceholderList
              loading={this.state.upcomingMatchesLoading}
              count={4}
            />
            {this.renderUpcomingMatchCards()}
          </div>
        ) : null}
      </div>
    );
  }
}
export default Matches;
