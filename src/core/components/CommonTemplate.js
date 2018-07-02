import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { Footer } from "./Footer";
import { Row, Container, Col } from "reactstrap";

export const CommonTemplate = ({ children }) => (
  <React.Fragment>
    <Header />
    <Container className="mt-4">
      <Row>
        <Col lg={9}>{children}</Col>
      </Row>
    </Container>
    <Footer />
  </React.Fragment>
);

CommonTemplate.propTypes = {
  children: PropTypes.node.isRequired
};
