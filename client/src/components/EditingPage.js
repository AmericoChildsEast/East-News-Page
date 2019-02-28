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

            <SideMenu />
            <div className="contentBox">
      
               <Editor placeholder={'Write something...'} />
               {/* <br />
                  <br />
                  <br /> */}
            </div>
         </div>
      );
   }
}


export default EditingPage;
//export default connect(null, actions)(EditingPage);