import React from "react";
import { connect } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";
import { compose } from "recompose";
import { CommonTemplate } from "../../../core/components/CommonTemplate";
import { AgentCreateView } from "../components";
import { createSubAgent } from "../effects";

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
      createSubAgent({
        id: props.agentId,
        name: values.name,
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

const SubAgentCreateForm = enchance(AgentCreateView);

export const SubAgentCreatePage = ({ history }) => {
  return (
    <CommonTemplate>
      <h1 className="md-3">SubAgent Create Page</h1>
      <SubAgentCreateForm history={history} />
    </CommonTemplate>
  );
};
