import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { ErrorMessage } from "../../../core/components/ErrorMessage";

export const SignForm = ({
  values,
  errors,
  serverError,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="username">Username</Label>
      <Input
        type="text"
        name="username"
        id="username"
        placeholder="username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
    </FormGroup>
    <FormGroup>
      <Label for="password">Password</Label>
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
    </FormGroup>
    <Button type="submit" disabled={isSubmitting}>
      Submit
    </Button>
  </form>
);

SignForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  })
};
