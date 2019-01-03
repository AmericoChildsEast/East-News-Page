import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import SideMenu from './SideMenu';

import './dashboardCSS.css';
class Members extends Component {

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
    
            console.log( "Testing", this.state.users );
          }

    render(){

      var users = [];
        if ( JSON.parse(localStorage.getItem("Users")) != null ) {
            users = JSON.parse(localStorage.getItem("Users"));
        } 

           return (
                 <div>
                       <SideMenu />
                       <div className="contentBox">
                         <h1>List of all members go here</h1>

                        {
                         users.map(function(users, index){
                           return   <div>
                                      <p id="p" style={{color: "black"}} >{users.name}</p>
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