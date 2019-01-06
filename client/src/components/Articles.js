import React, { Component } from 'react';
import SideMenu from './SideMenu';

import  './dashboardCSS.css';
import { Button } from 'reactstrap';

function ArticleBoxToken() {
    return (
        <div id="articleBox">

        <div id="visualBox"  style={{textAlign:"", color:"", padding:"5px 0 0 60px", fontSize:90}}>
              <p style={{textAlign:"",color:"white"}}> A </p> 
         </div>

         <div id="article_container" style={{border:"none", 
                                              width:"60%",
                                              height:"160px",
                                              float:"left",
                                              backgroundColor:""}}>
            <div id="sample_txt_Box">
              <h4>Article heading appears here</h4>
              <p>Sample text of article appers here... <br/>
                  Note: This is just a temprery example
              </p>
           </div>
        
           <span style={{textAlign:"",
                             float:"right",
                            border:"none",
                            margin:"6px 5px 0 0",
                            color:"#D5D8DC"}}>
                             Date:  1/4/2019
           </span>
         </div>
        <div id="manage_btn_Box"> 
            <Button id="delBtn">Delete</Button>
            <Button id="editBtn">Edit</Button>
        </div> 
        
     </div>
  );
}

class Articles extends Component {
 
    //print desired number of  article boxes..
 printMoreBox(){
    let numbox = [];
    for(var i=1;i<50;i++){

         numbox.push(<ArticleBoxToken />);
    }
    return numbox;
}
    render(){
      
        return(
        <div>
           <SideMenu />
           <div className="contentBox">

               <h1 style={{textAlign:"center",
                               color:""}}>
                  All articles in the data base are to be shown here 
               </h1>

               {this.printMoreBox()}
<br/>
<br/>
<br/>
        </div>
        </div>
        );
        
    }
 }


export default Articles;