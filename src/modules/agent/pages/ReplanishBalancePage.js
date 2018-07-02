import React from "react";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";
import { compose } from "recompose";

import { CommonTemplate } from "../../../core/components/CommonTemplate";
import { TransferFormView } from "../components";
import { setAgentBalance } from "../effects";

const formik = {
  mapPropsToValues: props => ({ balance: "" }),
  validationSchema: Yup.object().shape({
    balance: Yup.number()
      .typeError("Balance must be a number")
      .required("Required")
      .positive()
  }),
  handleSubmit: async (values, { props, setSubmitting, setErrors }) => {
    console.log(props.history);
    const ok = await props.dispatch(
      setAgentBalance({
        id: props.agentId,
        balance: values.balance
      })
    );
    if (ok) {
      props.history.push("/agent");
    }
  }
};

const mapStateToProps = state => {
  return { agentId: state.agent.id };
};
const enchance = compose(
  connect(mapStateToProps),
  withFormik(formik)
);

const ReplanishForm = enchance(TransferFormView);

export const ReplanishBalancePage = ({ history }) => {
  return (
    <CommonTemplate>
      <h1 className="md-3">Replanish Balanc Page</h1>
      <ReplanishForm history={history} />
    </CommonTemplate>
  );
};
