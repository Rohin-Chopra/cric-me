import React from "react";

import { fetchFindPlayer } from "../../helper";
import { playerCardList } from "../../components/PlayerCard";

class PlayerSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  async componentDidMount() {
    const players = await fetchFindPlayer(this.props.match.params.playerName);
    this.setState({ players });
  }
  renderPlayerCardList() {
    return playerCardList(this.state.players);
  }
  render() {
    return (
      <div>
        {" "}
        {this.props.match.params.playerName}hello{this.renderPlayerCardList()}
      </div>
    );
  }
}

export default PlayerSearch;
