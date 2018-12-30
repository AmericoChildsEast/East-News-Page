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
                <button id="btn">Button 1</button>
                <button id="btn">Button 2</button>
                <button id="btn">Button 3</button>
                <button id="btn">Button 4</button>
                
                </div>
                <div class="contentBox">
               
                {
                  
                    users.map(function(users, index){
                        return <p key={ index } style={{color: "black"}} >users.name}</p>;
                    })
                  
                }
                <p> Fake name </p>
                <p> Fake name </p>
                <p> Fake name </p>
                <p> Fake name </p>
                <p> Fake name </p>
                <p> Fake name </p>
                <p> Fake name </p>
                </div>
                </div>

            </div>
           
        );
    }
}

export default connect(null, actions)(Dashboard);