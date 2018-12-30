import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import dashboardCSS from './dashboardCSS.css';
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

                <div className="container" style={{marginBottom: '100px'}}>
                <div id="sideMenu">

        <button id="btn">
              <a onClick={this.toDashboard} style={{color: "black"}}>
                Dashboard component
              </a>
        </button>
        <button id="btn">Edit Article</button>
        <button id="btn">Button 2</button>
        <button id="btn">Button 3</button>
        <button id="btn">Button 4</button>
        <button id="btn">Button 5</button>
        <button id="btn">Button 6</button>
        <button id="btn">Button 7</button>
        <button id="btn">Button 8</button>
        <button id="btn">Button 9</button>
        <button id="btn">Button 10</button>
        </div>
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