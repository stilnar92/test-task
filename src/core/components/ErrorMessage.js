import React from "react";
import { Alert } from "reactstrap";

export const ErrorMessage = ({ children }) => (
  <Alert color="danger">{children}</Alert>
);
