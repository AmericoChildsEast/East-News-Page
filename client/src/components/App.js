import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './appstyle.css';
import Navbar from './Navbar'; // Importing Navbar
import Footer from './Footer';
import EditingPage from './EditingPage';
import Articles from './Articles';
import Members from './Members';




//import ShowCase from './Showcase';

//import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
//
export default (props) => {
  return (
    <div className="App">
      <Navbar />
        <div className="container">
          <Route path="/EditingPage" component={EditingPage} />
          <Route path="/Articles" component={Articles} />
          <Route path="/Members" component={Members} />
          { props.children }
        </div>
      <Footer />
    </div>
  );
}


