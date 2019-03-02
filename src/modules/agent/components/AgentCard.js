import React from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";

export const AgentCard = ({ children }) => {
  return (
    <Card>
      <div className="d-flex p-2 align-items-center">{children}</div>
    </Card>
  );
};

AgentCard.propTypes = {
  children: PropTypes.node.isRequired
};
