import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  Label,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import AuthHandler from "./AuthHandlers/AuthHandler"

class Header extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {errorMessage: '', showError: false}
    console.log(this.props.logged_in)
    this.getName = this.getName.bind(this);
  }

  getName()
  {
    /* console.warn(this.props.auth.getName()) */
    /* return this.props.auth.getName(); */
  }

  render() {
    if(!this.props.logged_in)
      return (
          <div key={this.props.logged_in} id="header" className="header rubik">
              <Navbar expand="md" className="full-width rtl-parent">
              <NavbarBrand className="text-success roboto" href="/">Memquotes</NavbarBrand>
              <Collapse isOpen={true} navbar>
              <Nav className="ml-left rtl-child" navbar>
                <NavItem>
                  <Link className="nav-link text-white" to="/">דף בית</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link text-white" to="/login">התחבר</Link>
                </NavItem>
                {/* <NavItem>
                  <Link className="nav-link text-white" to="/register">Register</Link>
                </NavItem> */}
              </Nav>

            </Collapse>
              </Navbar>
          </div>
      );
      else
        return (
          <div id="header" className="header rubik">
            <Navbar expand="md" className="full-width rtl-parent">
              <NavbarBrand className="text-success roboto" href="/">Memquotes</NavbarBrand>
              <Collapse isOpen={true} navbar>
                <Nav className="ml-left rtl-child" navbar>
                    <NavItem>
                      <Link className="nav-link text-white" to="/">דף בית</Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link text-white" to="/signout">התנתק</Link>
                    </NavItem>
                    {/* <NavItem>
                      <a className="nav-link text-white">{this.getName()}</a>
                    </NavItem> */}
                  </Nav>
            </Collapse>
              </Navbar>
          </div>
        );
  }
}

export default Header;
