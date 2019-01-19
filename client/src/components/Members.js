import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import SideMenu from './SideMenu';

import './dashboardCSS.css';
import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants';
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

        console.log( "Testing", this.state.users );
      }

      async promoteUser( id ) {
        await this.props.promoteUser({ target: id, user: localStorage.getItem('GoogleID') });
        this.refresh();
      }

      async demoteUser( id ) {
        await this.props.demoteUser({ target: id, user: localStorage.getItem('GoogleID') });
        this.refresh();
      }

    render(){

      var users = [];

      if ( JSON.parse(localStorage.getItem("Users")) != null ) {
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
                         <h1 style={{color: "black",textAlign:"center"}}>Members</h1>
                         <a onClick={this.refresh}>Refresh</a>
                        {
                         users.map( (users) => {
                           return   <div>
                                     <p id="pName"> 
                                     
                                     <span id="pchild"  style={{color: "black"}} >{users.name}</span>
                                     <span id="pchild" style={{float:"right",borderLeft:" 1px solid #808B96"}}>
                                      <button onClick={ () => this.promoteUser( users.googleid ) }>Promote</button>
                                      <button onClick={ () => this.demoteUser( users.googleid ) }>Demote</button>
                                     </span>
                                     <span id="pchild" style={{float:"right",borderLeft:" 1px solid  #808B96"}}>{groups[users.group]}</span>
                                    <hr style={{border:"0.4 solid  #566573"}}/>
                                  </p>
                                   </div>
                            })
                        }
                    </div>
                 </div>
                 );
    }
 }

 export default connect(null, actions)(Members);
//export default Members;