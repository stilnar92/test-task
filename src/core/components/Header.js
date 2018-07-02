import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavLink,
  NavbarBrand,
  Container,
  NavItem,
  Nav
} from "reactstrap";

import { ROUTES } from "../../constants";
import { logout } from "../../modules/auth/effects";
import { connect } from "react-redux";

const LogOutLink = ({ children, logout, history }) => (
  <NavLink className="nav-link text-light" onClick={logout}>
    {children}
  </NavLink>
);

const Header = ({ children, logout, isAuthenticated }) => (
  <div>
    <Navbar color="dark" dark expand="lg" fixed="top">
      <Container>
        <NavbarBrand href={ROUTES.AGENT.MAIN}>Agent Management</NavbarBrand>
        <Navbar>
          <Nav className="ml-auto">
            {isAuthenticated ? (
              <NavItem>
                <LogOutLink logout={logout}>Logout</LogOutLink>
              </NavItem>
            ) : (
              <React.Fragment>
                <NavItem>
                  <Link className="nav-link text-light" to={ROUTES.AUTH.LOGIN}>
                    Login
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link text-light"
                    to={ROUTES.AUTH.REGISTER}
                  >
                    Register
                  </Link>
                </NavItem>
              </React.Fragment>
            )}
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  </div>
);

export default connect(
  state => {
    return { isAuthenticated: state.auth.isAuthenticated };
  },
  { logout }
)(Header);

Header.propTypes = {
  children: PropTypes.node,
  logout: PropTypes.func
};

Header.defaultProps = {
  children: null
};
