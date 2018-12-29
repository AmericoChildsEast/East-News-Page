import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

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
                {  }
                <div className="container" style={{marginBottom: '100px'}}>
                <a onClick={this.toDashboard} style={{color: "#ffff"}}>Dashboard component</a>

                {
                  
                    users.map(function(users, index){
                        return <p key={ index } style={{color: "#ffff"}} >{users.name}</p>;
                    })
                  
                }

                </div>
            </div>
        );
    }
}

export default connect(null, actions)(Dashboard);