
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


import * as actions from '../actions';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toDashboard = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toDashboard() {
    //this.props.push('/dashboard');
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  signOut() {
    console.log("hey");
    this.props.signOut();
    //this.props.push('/');
  }
  ///
  //
  //
  //
  render() {
    return (

      <div>

<Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">
          <img src={require('../content/towernews.png')} width="249" height="100" alt=""/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            { !this.props.isAuth ?
              [
                <NavItem>
                  <NavLink href="/signin">Sign-In</NavLink>
                </NavItem>
              ] : null 
            }

            { this.props.isAuth ?
              [
                <li className="nav-item">
                  <NavLink href="/signout" onClick={this.signOut}>
                  Sign-Out
                  </NavLink>
                </li>
              ] : null 
            }

            { this.props.isAuth ? [
              <UncontrolledDropdown nav inNavbar>
              
                <DropdownToggle nav caret dark>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.props.toDashboard}>
                  <a href="/dashboard">Dashboard</a>
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ] : null }
            </Nav>
          </Collapse>
        </Navbar>

        
      </div>
      
    );
  }
};

function mapStateToProps(state) {
    return {
      isAuth: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps, actions)(NavBar);