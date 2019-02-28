
import React, { Component } from 'react';

//import { Container } from 'reactstrap';

import './homeArticle.css';
//import Showcase from './Showcase';

function ArticleCard() {
    return (
        <div id="article-card">
            <div id="card-img">
            {/* img / letters / colors */}
           
            </div>
            <div id="card-footer">
            <p>Tittle goes here and sample text...</p>
             <p>NOTE: this is just a temporary example</p>
            </div>
        </div>
    );
}

class HomeArticle extends Component {
    printMoreBox() {
        let numbox = [];
        for (var i = 1; i < 10; i++) {

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