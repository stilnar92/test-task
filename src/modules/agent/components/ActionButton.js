import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const LinkButton = props => {
  const { staticContext, history, to, onClick, ...rest } = props;
  return (
    <Button
      {...rest}
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
    />
  );
};

LinkButton.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export const ActionButton = withRouter(LinkButton);
