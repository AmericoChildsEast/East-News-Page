import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import  './dashboardCSS.css';

class SideMenu extends Component {

  
    render(){
           return (
            
              <div>
                 <div id="sideMenu">

                        <button id="btn">
                          <a onClick={this.toDashboard} style={{color: "black"}}>
                          Dashboard component
                            </a>
                        </button>

                      <NavLink to="/EditingPage">
                            <button id="btn">Edit New Article</button>
                       </NavLink>

                       <NavLink to="/Articles">
                        <button id="btn">All Articles</button> 
                        </NavLink>

                        <NavLink to="/Members">
                        <button id="btn">Members</button>
                        </NavLink>

                        <NavLink to="">
                        <button id="btn">Button 3</button>
                        </NavLink>

                        
                   </div>
                  
          </div>
        
           );
    }
      
}
export default SideMenu;