import React from "react";

import Avatar from "../../components/Avatar";
import Card from "../../components/Card";
import PlayerDataRow from "./PlayerDataRow";
import Wrapper from "../../components/Wrapper";

import playerData from "./PlayerData";
class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
    };
  }
  getPlayer = () => {};

  componentDidMount() {
    const pId = this.props.match.params.playerId;
    this.setState({ player: playerData });
  }
  render() {
    return (
      <Wrapper>
        hello
        {this.props.match.params.playerId}
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
        </Card>
      </Wrapper>
    );
  }
}

export default Player;
