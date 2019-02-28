import React, { Component } from 'react';
import SideMenu from './sideMenu';

import './dashboardCSS.css';
import './article.css';
import { Button } from 'reactstrap';

function ArticleBoxToken() {
    return (
        <div id="articleBox">

            <div id="article-container" >
           
                <div id="sample-txt-Box">
                    <h4>Article heading appears here</h4>
                    <p>Sample text of article appers here... <br />
                        Note: This is just a temprery example
                    </p>
                </div>

                <span style={{
                    textAlign: "",
                    float: "right",
                    border: "none",
                    margin: "6px 5px 0 0",
                    color: "#D5D8DC"
                }}>
                    Date:  1/4/2019
                </span>
            </div>
            <div id="manage-btn-Box">
                <Button id="delBtn">Delete</Button>
                <Button id="editBtn">Edit</Button>
            </div>

        </div>
    );
}

class Articles extends Component {

    //print desired number of  article boxes #JUST for development popurses..
    printMoreBox() {
        let numbox = [];
        for (var i = 1; i < 10; i++) {

            numbox.push(<ArticleBoxToken />);
        }
        return numbox;
    }
    render() {

        return (
            <div>
                <SideMenu />
                <div className="contentBox">

                <div id="article-page-nav">
                <h1 style={{ color: "black", margin: "5px 0 0 400px", fontSize:23 }}>Articles</h1>
                </div>
                   
                    {this.printMoreBox()}
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        );

    }
}


export default Articles;