import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import { fetchFindPlayer } from "../../helper";
import PlayerCard from "../../components/PlayerCard";
import { PlayerCardPlaceholder } from "../../components/Placeholders";
import "./PlayersSearch.css";
class PlayerSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      loading: true,
    };
  }

  async componentDidMount() {
    // const players = await fetchFindPlayer(this.props.match.params.playerName);
    // this.setState({ loading: false });
    // this.setState({ players });
  }

  renderPlaceholders = () => {
    const arr = [];
    for (let index = 0; index < 3; index++) {
      arr.push(
        <Col lg={3} className="player-item" style={{ margin: "0px 6px 12px" }}>
          <PlayerCardPlaceholder />
        </Col>
      );
    }
    return this.state.loading && arr;
  };
  renderPlayerCardList() {
    return this.state.players.map((player) => {
      return (
        <Col lg={3} className="player-item" style={{ margin: "0px 6px 12px" }}>
          <PlayerCard player={player} />
        </Col>
      );
    });
  }
  render() {
    return (
      <Container className="my-2">
        <h2>Showing Results for {this.props.match.params.playerName}</h2>
        <Row>
          {" "}
          {this.renderPlaceholders()}
          {this.renderPlayerCardList()}
        </Row>
      </Container>
    );
  }
}

export default PlayerSearch;
//maxWidth: "calc(25% - 12px)"
