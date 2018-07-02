import React from "react";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";
import { compose } from "recompose";

import { CommonTemplate } from "../../../core/components/CommonTemplate";
import { TransferFormView } from "../components";
import { transferAgentBalance } from "../effects";

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
      transferAgentBalance({
        id: props.params.agentId,
        subAgentId: props.params.subAgentId,
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

const TransferForm = enchance(TransferFormView);

export const TransferPage = ({ history, match: { params } }) => {
  return (
    <CommonTemplate>
      <h1 className="md-3">Transfer to SubAgent Page</h1>
      <TransferForm history={history} params={params} />
    </CommonTemplate>
  );
};
