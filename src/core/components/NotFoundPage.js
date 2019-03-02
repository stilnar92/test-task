import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { CommonTemplate } from "./CommonTemplate";

export const NotFoundPage = () => (
  <CommonTemplate>
    <Helmet title="Page Not Found" />
    <Container>
      <h2>Sorry, this page isn{"'"}t available.</h2>
      <p>
        The link you followed may be broken, or the page may have been removed.{" "}
        <Link to="/">Go back.</Link>
      </p>
    </Container>
  </CommonTemplate>
);
