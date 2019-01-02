import React, { Component } from 'react';
import SideMenu from './SideMenu';

class Articles extends Component {

    render(){
           return (
                 <div>
                    <SideMenu />
                    <h1>All articles in the data base are to be shown here </h1>
                 </div>
           );
    }
 }


export default Articles;