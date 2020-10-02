import React from "react";

import { fetchPlayer } from "../../helper";

import Avatar from "../../components/Avatar";
import Card from "../../components/Card";
import Wrapper from "../../components/Wrapper";
import PlayerDataRow from "./PlayerDataRow";
import PlayerStatTable from "./PlayerStatTable";
import { CardHeader } from "../../components/Card";
import { NewsCardPlaceholderList } from "../../components/Placeholders";
import { fetchNews } from "../../helper";
import { newsCardList } from "../../components/NewsCard";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
      articles: [],
      articlesLoading: true,
    };
    this.playerId = this.props.match.params.playerId;
  }
  getPlayer = async () => {
    const player = await fetchPlayer(this.playerId);
    console.log(player);
    this.setState({ player });
  };
  getNews = async () => {
    const articles = await fetchNews(this.state.player.name);
    this.setState({ articlesLoading: false });
    this.setState({ articles });
  };
  renderNewsCards = () => newsCardList(this.state.articles);

  renderStatTable = () => {
    return this.state.player.data ? (
      <React.Fragment>
        <div>
          <h4>Batting and fielding averages</h4>
          <PlayerStatTable stat={this.state.player?.data?.batting} />
        </div>
        <div>
          <h4>Bowling averages</h4>
          <PlayerStatTable stat={this.state.player?.data?.bowling} />
        </div>
      </React.Fragment>
    ) : null;
  };
  async componentDidMount() {
    await this.getPlayer();
    this.getNews();
  }
  render() {
    return (
      <Wrapper>
        <Avatar
          style={{ width: "unset", height: "unset" }}
          playerId={this.state.player.pid}
          name={this.state.player.name}
        />
        <Card>
          <div>
            <h3>{this.state.player.name}</h3>
            <h4 style={{ color: "#999999" }}>{this.state.player.country}</h4>
          </div>
          <hr />
          <div>
            <PlayerDataRow
              property={"Full Name"}
              value={this.state.player.fullName}
            />
            <PlayerDataRow property={"Born"} value={this.state.player.born} />
            <PlayerDataRow
              property={"Current Age"}
              value={this.state.player.fullName}
            />
            <PlayerDataRow
              property={"Major teams"}
              value={this.state.player.majorTeams}
            />
            <PlayerDataRow
              property={"Playing role"}
              value={this.state.player.playingRole}
            />
            <PlayerDataRow
              property={"Batting style"}
              value={this.state.player.battingStyle}
            />
            <PlayerDataRow
              property={"Bowling  style"}
              value={this.state.player.bowlingStyle}
            />
          </div>
          <hr />
          <div>
            <PlayerDataRow
              property={"In a nutshell"}
              value={this.state.player.profile}
            />
          </div>
          {this.renderStatTable()}
        </Card>
        <div className="my-2 w-100">
          {this.state.articles.length !== 0 ? (
            <CardHeader className=" rounded-top card-header w-80">
              <p className="mb-0 font-weight-bold">
                Articles related to {this.state.player.name}
              </p>
            </CardHeader>
          ) : null}
          <NewsCardPlaceholderList
            loading={this.state.articlesLoading}
            count={4}
          />
          {this.renderNewsCards()}
        </div>
      </Wrapper>
    );
  }
}

export default Player;
