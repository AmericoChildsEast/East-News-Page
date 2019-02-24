
import React, { Component } from 'react';

//import { Container } from 'reactstrap';

import './homeArticle.css';
//import Showcase from './Showcase';

function ArticleCard() {
    return (
        <div id="article-card">
            <div id="card-img">

            </div>
            <div id="card-footer">
            </div>
        </div>
    );
}

class HomeArticle extends Component {
    printMoreBox() {
        let numbox = [];
        for (var i = 1; i < 2; i++) {

            numbox.push(<ArticleCard />);
        }
        return numbox;
    }
    render() {
        return (
            <div>
                <div className="">
                    {this.printMoreBox()}
                </div>

            </div>
        );
    }
}

export default HomeArticle;