import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";
import { compose } from "recompose";
import { CommonTemplate } from "../../../core/components/CommonTemplate";
import { AgentCreateView } from "../components/AgentCreateView";
import { createAgent } from "../effects";

const formik = {
  mapPropsToValues: props => ({ name: "", balance: "" }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Must be longer than 2 characters")
      .max(20, "Nice try, nobody has a name that long")
      .required("Required"),
    balance: Yup.number()
      .typeError("Balance must be a number")
      .required("Required")
      .positive()
  }),
  handleSubmit: async (values, { props, setSubmitting, setErrors }) => {
    const ok = await props.dispatch(
      createAgent({
        name: values.name,
        balance: values.balance
      })
    );
    if (ok) {
      props.history.push("/agent");
    }
  }
};

const enchance = compose(
  connect(),
  withFormik(formik)
);

const AgentCreateForm = enchance(AgentCreateView);

export const AgentCreatePage = ({ history }) => {
  return (
    <CommonTemplate>
      <h1 className="md-3">Agent Create Page</h1>
      <AgentCreateForm history={history} />
    </CommonTemplate>
  );
};

AgentCreatePage.propTypes = {
  history: PropTypes.history
};
