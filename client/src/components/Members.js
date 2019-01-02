import React, { Component } from 'react';
import SideMenu from './SideMenu';

import './dashboardCSS.css';
class Members extends Component {

    render(){
           return (
                 <div>
                       <SideMenu />
                       <div className="contentBox">
                         <h1>List of all members go here</h1>
                    </div>
                 </div>
           );
    }
 }


export default Members;