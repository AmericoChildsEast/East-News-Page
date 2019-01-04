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
                         <h1 style={{color: "black",textAlign:"center"}}>Members</h1>

                        {
                         users.map(function(users, index){
                           return   <div>
                                     <p id="pName"> 
                                     <span id="pchild"  key={ index } style={{color: "black"}} >{users.name}</span>
                                     <span id="pchild" style={{float:"right",borderLeft:" 1px solid #808B96"}}>date here/email</span>
                                     <span id="pchild" style={{float:"right",borderLeft:" 1px solid  #808B96"}}>time here/password</span>
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