import React from 'react';
import Navbar from './Navbar'; // Importing Navbar

import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

export default (props) => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        { props.children }
      </div>
    </div>
  );
}


