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

                       <NavLink to="/EditingPage">
                        <button id="btn">Edit Article</button> 
                        </NavLink>

                        <NavLink to="/EditingPage">
                        <button id="btn">Button 2</button>
                        </NavLink>

                        <NavLink to="/EditingPage">
                        <button id="btn">Button 3</button>
                        </NavLink>

                        <NavLink to="/EditingPage">
                        <button id="btn">Button 4</button>
                        </NavLink>

                        <NavLink to="/EditingPage">
                        <button id="btn">Button 5</button>
                        </NavLink>

                        <NavLink to="/EditingPage">
                        <button id="btn">Button 6</button>
                        </NavLink>

                        <NavLink to="/EditingPage">
                        <button id="btn">Button 7</button>
                        </NavLink>

                        <NavLink to="/EditingPage">
                        <button id="btn">Button 8</button>
                        </NavLink>

                        <NavLink to="/EditingPage">
                        <button id="btn">Button 9</button>
                        </NavLink>
                        
                   </div>
                  
          </div>
        
           );
    }
      
}
export default SideMenu;