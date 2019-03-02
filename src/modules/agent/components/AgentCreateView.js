import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { ErrorMessage } from "../../../core/components/ErrorMessage";

export const AgentCreateView = ({
  values,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
    </FormGroup>
    <FormGroup>
      <Label for="balance">Balance</Label>
      <Input
        type="balance"
        name="balance"
        id="balance"
        placeholder="balance"
        value={values.balance}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.balance && <ErrorMessage>{errors.balance}</ErrorMessage>}
    </FormGroup>
    <Button type="submit">Create</Button>
  </form>
);

AgentCreateView.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};
