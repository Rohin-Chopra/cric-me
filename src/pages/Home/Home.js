import React from "react";
import { Button, ButtonGroup, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center flex-column">
      <div className="w-100 d-flex align-items-center justify-content-center">
        <Card
          className="text-center mt-2"
          bodyClassName="d-flex flex-column align-items-center justify-content-center"
        >
          <h2>Which Player Do you Want to look at?</h2>
          <InputGroup className="mb-3" id="search-bar">
            <InputGroup.Prepend>
              <InputGroup.Text id="player-name">
                <FontAwesomeIcon icon={faSearch} />{" "}
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className="bg-primary"
              placeholder="Dhoni"
              aria-label="player-name"
              aria-describedby="player-name"
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
        <Card>
          <h3>Fact For today</h3>
          <p>
            In 1997 Women’s world cup, Belinda Clark hit a double ton and made
            unbeaten 229 against Denmark.
          </p>
          <Button className="mr-3">Get Another Fact</Button>
        </Card>
      </div>
    </div>
  );
};
export default Home;
