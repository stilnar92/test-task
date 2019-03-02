import React from "react";
import PropTypes from "prop-types";
import { CardBody, CardTitle, CardText } from "reactstrap";

export const AgentInfo = ({ name, balance }) => {
  return (
    <CardBody>
      <CardTitle className="card-title">{name}</CardTitle>
      <CardText>Balance: ${balance}</CardText>
    </CardBody>
  );
};

AgentInfo.propTypes = {
  name: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired
};
