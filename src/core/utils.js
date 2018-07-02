import React from "react";
import { branch, compose, renderComponent } from "recompose";
import { Spinner } from "./components/Spinner";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LOADING } from "../constants";

export const spinnerWhileLoading = isLoading =>
  branch(isLoading, renderComponent(Spinner));

const auth = function(Component) {
  return function(props) {
    if (props.isAuthenticated) {
      return <Component {...props} />;
    } else if (props.isNotAuthenticated) {
      return <Redirect to="/login" />;
    } else {
      return <Spinner />;
    }
  };
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isNotAuthenticated:
      state.auth.status === LOADING.initial ||
      state.auth.status === LOADING.failed
  };
};
const enchance = compose(
  connect(mapStateToProps),
  auth
);
export const withAuth = DecoratedComponent => enchance(DecoratedComponent);
