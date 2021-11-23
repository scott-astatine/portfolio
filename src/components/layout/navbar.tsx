import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";
import { NavLink } from "react-router-dom";

interface Props {
  name: string;
}

export default class AppNavbar extends Component<Props> {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  navCollapse = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <MDBNavbar
        color="navbg"
        dark
        expand="md"
        fixed="top"
        transparent={(this.state.isOpen === false) ? true : false}
        scrolling
      >
        <MDBNavbarBrand>
          <NavLink className='navbar-brand' to="/">
            Scott
          </NavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav className="nav-pills nav-fill" right>
            <MDBNavItem>
              <MDBNavLink onClick={this.navCollapse} exact to="/">
                <MDBIcon fas icon="home" />Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink onClick={this.navCollapse} to="/about">
                <MDBIcon fas icon="user-tie" />About
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink onClick={this.navCollapse} to="/skills">
                <MDBIcon fas icon="tools" />Skills
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink onClick={this.navCollapse} to="/contact">
                <MDBIcon fas icon="phone" />Contact
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav className="nav-fill" right>
            <MDBNavItem>
              <a className="nav-link waves-effect waves-light" href="https://www.twitter.com/ScottAstatine"
                target="_blank" rel="noopener noreferrer">
                <MDBIcon fab icon="twitter" />{this.state.isOpen ? 'Twitter' : ''}
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="nav-link waves-effect waves-light" href="https://www.facebook.com/ScottAstatine"
                target="_blank" rel="noopener noreferrer">
                <MDBIcon fab icon="facebook" />{this.state.isOpen ? 'Facebook' : ''}
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="nav-link waves-effect waves-light" href="https://www.instagram.com/williamastatine"
                target="_blank" rel="noopener noreferrer">
                <MDBIcon fab icon="instagram" />{this.state.isOpen ? 'Instagram' : ''}
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="nav-link waves-effect waves-light" href="https://www.linkedin.com/in/williamastatine"
                target="_blank" rel="noopener noreferrer">
                <MDBIcon fab icon="linkedin" />{this.state.isOpen ? 'Linkedin' : ''}
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="nav-link waves-effect waves-light" href="https://github.com/william-astatine"
                target="_blank" rel="noopener noreferrer">
                <MDBIcon fab icon="github" />{this.state.isOpen ? 'Github' : ''}
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
