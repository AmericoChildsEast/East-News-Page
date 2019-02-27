import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import SideMenu from './sideMenu';
import * as actions from '../actions';
import './dashboardCSS.css';

function DashImage(){
 return(
      <div >
    <img id="dash-img" src={require('../content/edash_img.svg')}  />
     </div>
 );
}
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.toDashboard = this.toDashboard.bind(this);
        this.state = {
            users: null
        }
    }
    //
    async toDashboard() {
        await this.props.getUsers();

        this.setState({
            users: JSON.parse(localStorage.getItem("Users"))
        });

        console.log("Testing", this.state.users);
    }

    render() {


        var users = [];
        if (JSON.parse(localStorage.getItem("Users")) != null) {
            users = JSON.parse(localStorage.getItem("Users"));
        }

        //document.body.style.backgroundColor = "#ffff";

        return (

            <div>

                <div className="container" style={{ marginBottom: '0px' }}>
                    <SideMenu />
                    <div class="contentBox">
                    <DashImage />
                        {
                            
                            //display members #format
                            // users.map(function (users, index) {
                            //     return <div>
                            //         <p id="pName">
                            //             <span id="pchild" key={index} style={{ color: "black" }} >{users.name}</span>
                            //             <span id="pchild" style={{ float: "right", borderLeft: " 1px solid #808B96" }}>date here/email</span>
                            //             <span id="pchild" style={{ float: "right", borderLeft: " 1px solid  #808B96" }}>time here/password</span>
                            //             <hr style={{ border: "0.4px solid  #566573" }} />
                            //         </p>
                            //     </div>
                            // })

                        }

                    </div>
                </div>

            </div>

        );
    }
}

export default connect(null, actions)(Dashboard);