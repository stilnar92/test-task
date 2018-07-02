import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";
import { compose } from "recompose";

import { CommonTemplate } from "../../../core/components/CommonTemplate";
import { getAgent } from "../../agent/effects";
import { loginUser } from "../effects";
import { SignForm } from "../components/SignForm";

const formik = {
  mapPropsToValues: props => ({ username: "", password: "" }),
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(2, "Must be longer than 2 characters")
      .max(20, "Nice try, nobody has a username that long")
      .required("Required"),
    password: Yup.string()
      .min(6, "Must be longer than 6 characters")
      .max(20, "Nice try, nobody has a username that long")
      .required("Required")
  }),
  handleSubmit: async (values, { props, setSubmitting, setErrors }) => {
    const isLogged = await props.loginUser({
      username: values.username,
      password: values.password
    });

    if (isLogged) {
      const existsAgent = await props.getAgent(values.username);
      if (existsAgent) {
        props.history.push("/agent");
      } else {
        props.history.push("/agent/create");
      }
    }
  }
};

const mapDispatchToProps = {
  loginUser,
  getAgent
};

const enchance = compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withFormik(formik)
);

const LoginForm = enchance(SignForm);

export const LoginPage = ({ history }) => (
  <CommonTemplate>
    <h1 className="md-3">Login</h1>
    <LoginForm history={history} />
  </CommonTemplate>
);

LoginPage.propTypes = {
  history: PropTypes.history
};

LoginForm.propTypes = {
  history: PropTypes.history
};
