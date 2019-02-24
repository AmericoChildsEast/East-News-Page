import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import './dashboardCSS.css';
import './sideMenu.css';

class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.toDashboard = this.toDashboard.bind(this);
        this.state = {
            users: null
        }
    }

    async toDashboard() {
        await this.props.getUsers();

        this.setState({
            users: JSON.parse(localStorage.getItem("Users"))
        });

        console.log("Testing", this.state.users);
    }

    render() {
        return (

            <div>
                <div id="sideMenu">
                    <NavLink to="/EditingPage">
                        <button id="btn">Edit New Article</button>
                    </NavLink>

                    <NavLink to="/Articles">
                        <button id="btn">All Articles</button>
                    </NavLink>

                    <NavLink to="/Members">
                        <button id="btn" onClick={this.toDashboard}>Members</button>
                    </NavLink>

                    <NavLink to="">
                        <button id="btn">Button 3</button>
                    </NavLink>


                </div>

            </div>

        );
    }

}
export default connect(null, actions)(SideMenu);