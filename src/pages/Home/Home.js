import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/Card";
import "./Home.css";


const Home = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center">
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
      </Card>
    </div>
  );
};
export default Home;
