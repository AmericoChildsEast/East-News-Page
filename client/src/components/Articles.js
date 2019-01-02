import React, { Component } from 'react';
import SideMenu from './SideMenu';

import  './dashboardCSS.css';

class Articles extends Component {

    render(){
           return (
                 <div>
                    <SideMenu />
                    <div className="contentBox">
                    <h1>All articles in the data base are to be shown here </h1>
                    </div>
                 </div>
           );
    }
 }


export default Articles;