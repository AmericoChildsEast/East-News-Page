import React, { Component } from 'react';
import SideMenu from './SideMenu';
import Editor from './Editor';

import  './dashboardCSS.css';

class EditingPage extends Component {

    render(){
           return (
                 <div>
                    <SideMenu />
                    <div className="contentBox">
                    <h1>Editor</h1>
                    <Editor placeholder={'Write something...'}/>
                    <br/>
                    <br/>
                    <br/>
                    </div>
                 </div>
           );
    }
 }


export default EditingPage;