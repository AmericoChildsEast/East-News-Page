import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import SideMenu from './SideMenu';
import * as actions from '../actions';

class Dashboard extends Component {
    
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

    render() {

        
        var users = [];
        if ( JSON.parse(localStorage.getItem("Users")) != null ) {
            users = JSON.parse(localStorage.getItem("Users"));
        } 
        
        //document.body.style.backgroundColor = "#ffff";

        return (
                
            <div>
                <SideMenu />
                <div className="container" style={{marginBottom: '100px'}}>
                <div class="contentBox">
               
                {
                  
                    users.map(function(users, index){
                        return <p id="p" key={ index } style={{color: "black"}} >users.name}
                                  <p id="pchild">date here/email</p>
                                  <p id="pchild">time here/password</p>
                                </p>;
                    })
                  
                
                }
                
                    
                <p>Name goes here 
                    <p id="pchild">date here/email</p>
                    <p id="pchild">time here/password</p>
                </p>
                <p>Name goes here 
                    <p id="pchild">date here/email</p>
                    <p id="pchild">time here/password</p>
                </p>
                <p>Name goes here 
                    <p id="pchild">date here/email</p>
                    <p id="pchild">time here/password</p>
                </p>
                <p>Name goes here 
                <p id="pchild">date here/email</p>
                    <p id="pchild">time here/password</p>
                </p>
                <p>Name goes here 
                <p id="pchild">date here/email</p>
                    <p id="pchild">time here/password</p>
                </p>
                <p>Name goes here 
                <p id="pchild">date here/email</p>
                    <p id="pchild">time here/password</p>
                </p>
                <p>Name goes here 
                <p id="pchild">date here/email</p>
                    <p id="pchild">time here/password</p>
                </p>
                
                </div>
                <h3> This content should appear after the dashbord component button is clicked </h3>
                </div>
                
            </div>
           
        );
    }
}

export default connect(null, actions)(Dashboard);