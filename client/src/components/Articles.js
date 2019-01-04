import React, { Component } from 'react';
import SideMenu from './SideMenu';

import  './dashboardCSS.css';
import { Button } from 'reactstrap';

class Articles extends Component {

    render(){
           return (
                 <div>
                    <SideMenu />
                    <div className="contentBox">
                        <h1 style={{textAlign:"center",color:""}}>
                           All articles in the data base are to be shown here 
                        </h1>
                        <div id="textBox">
                           <div id="innerBox"></div>
                           <div id="a-Txt">
                           <h4>Heading appears here</h4>
                           <p>Sample of article text appers here</p>
                           </div>
                           <div id="innerBox2"> 
                               <Button id="delBtn">Delete</Button>
                               <Button id="editBtn">Edit</Button>
                           </div>  
                        </div>
                  </div>
                 </div>
           );
    }
 }


export default Articles;