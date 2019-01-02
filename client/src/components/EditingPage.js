import React, { Component } from 'react';
import SideMenu from './SideMenu';

import  './dashboardCSS.css';

class EditingPage extends Component {

    render(){
           return (
                 <div>
                    <SideMenu />
                    <div className="contentBox">
                    <h1>Editng tools go here</h1>
                    </div>
                 </div>
           );
    }
 }


export default EditingPage;