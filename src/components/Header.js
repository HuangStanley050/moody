import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends Component {
  state = {
    isOpen: false
  };
  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });
  render() {
    const LogoutLinks = (
      <>
        <NavItem>
          <NavLink to="/login" tag={Link}>
            Login
          </NavLink>
        </NavItem>
      </>
    );
    const LoginLinks = (
      <>
        <NavItem>
          <NavLink to="/moods" tag={Link}>
            Moods
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/addmood" tag={Link}>
            Add Mood
          </NavLink>
        </NavItem>
      </>
    );
    return (
      <section>
        <Navbar style={{ backgroundColor: "green" }} expand="md">
          <NavbarBrand tag={Link} to="/">
            Moody
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {LogoutLinks}
            </Nav>
          </Collapse>
        </Navbar>
      </section>
    );
  }
}
export default Header;
