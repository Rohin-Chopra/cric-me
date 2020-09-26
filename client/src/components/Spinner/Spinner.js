import React from "react";
import { Spinner } from "react-bootstrap";

const MySpinner = ({ loading }) => {
  return loading ? (
    <Spinner animation="border" role="status" variant="primary"> 
      <span className="sr-only">Loading...</span>
    </Spinner>
  ) : null;
};

export default MySpinner;
