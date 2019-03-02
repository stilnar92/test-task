import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Input, Button } from "reactstrap";
import { ErrorMessage } from "../../../core/components/ErrorMessage";

export const TransferFormView = ({
  values,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    <FormGroup>
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
    <Button type="submit">Ok</Button>
  </form>
);

TransferFormView.propTypes = {
  values: PropTypes.shape({
    balance: PropTypes.string.isRequired
  })
};
