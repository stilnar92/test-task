import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";
import { compose } from "recompose";

import { CommonTemplate } from "../../../core/components/CommonTemplate";
import { getAgent } from "../../agent/effects";
import { SignForm } from "../components/SignForm";
import { loginUser } from "../effects/loginUser";
import { registerUser } from "../effects/registerUser";

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
    const isRegister = await props.registerUser({
      username: values.username,
      password: values.password
    });
    if (isRegister) {
      const isLogged = await props.loginUser({
        username: values.username,
        password: values.password
      });
      if (isLogged) {
        props.history.push("/agent");
      }
    }
  }
};

const mapDispatchToProps = {
  loginUser,
  registerUser,
  getAgent
};
const enchance = compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withFormik(formik)
);

const RegisterForm = enchance(SignForm);

export const RegisterPage = ({ history }) => (
  <CommonTemplate>
    <h1 className="md-3">Registration</h1>
    <RegisterForm history={history} />
  </CommonTemplate>
);

RegisterPage.propTypes = {
  history: PropTypes.history
};

RegisterForm.propTypes = {
  history: PropTypes.history
};
