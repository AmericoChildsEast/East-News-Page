import React, { Component } from 'react';
import SideMenu from './sideMenu';
import Editor from './Editor';

import './dashboardCSS.css';
import './editingPage.css';
//import './sideMenu.css';

class EditingPage extends Component {

   render() {
      return (
         <div>
          
            <div>
            <SideMenu />
            <div className="contentBox">
                  {/* <h1>Editor</h1> */}
                  <Editor placeholder={'Write something...'} />
                  {/* <br />
                  <br />
                  <br /> */}
               </div>
            </div>
         </div>
      );
   }
}


export default EditingPage;
//export default connect(null, actions)(EditingPage);