import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants';

import SideMenu from './sideMenu';

import './dashboardCSS.css';
import './members.css';

class Members extends Component {

  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
    this.promoteUser = this.promoteUser.bind(this);
    this.demoteUser = this.demoteUser.bind(this);
    this.state = {
      users: null,
    }
  }

  async refresh() {
    await this.props.getUsers();

    this.setState({
      users: JSON.parse(localStorage.getItem("Users"))
    });

    console.log("Testing", this.state.users);
  }

  async promoteUser(id) {
    await this.props.promoteUser({ target: id, user: localStorage.getItem('GoogleID') });
    this.refresh();
  }

  async demoteUser(id) {
    await this.props.demoteUser({ target: id, user: localStorage.getItem('GoogleID') });
    this.refresh();
  }

  render() {

    var users = [];

    if (JSON.parse(localStorage.getItem("Users")) != null) {
      users = JSON.parse(localStorage.getItem("Users"));
    }

    var targ;
    var groups = [];
    groups = [
      "User",
      "Curator",
      "Admin"
    ]

    return (
      <div>
        <SideMenu />
        <div className="contentBox">
        

          <div id="members-container">
            <div id="members-nav">
              <button id="refresh-btn" onClick={this.refresh}>Re-fresh</button>
              <h1 style={{ color: "black", margin: "5px 0 0 400px", fontSize:23 }}>Members</h1>
            </div>
            {
              users.map((users) => {
                return (
                  <div>

                    <div id="pName">
                      <div id="pchild" style={{ float: "left"}} >{users.name}</div>
                      <div id="pchild" style={{ float: "left", borderLeft: " 1px solid  #808B96" }}>{groups[users.group]}</div>
                      <span id="pchild1" style={{ float: "right", borderLeft: " 1px solid #808B96" }}>
                        <button id="promote-btn" onClick={() => this.promoteUser(users.googleid)}>Promote</button>
                        <button id="demote-btn" onClick={() => this.demoteUser(users.googleid)}>Demote</button>
                      </span>

                      {/* <hr style={{ border: "0.4 solid  #566573" }} /> */}
                    </div>

                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Members);
//export default Members;