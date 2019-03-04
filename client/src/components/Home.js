
import React, { Component } from 'react';

import { Container } from 'reactstrap';


import Showcase from './Showcase';
import ArticleCard from './HomeArticle';
import HeaderImage from './HeaderImage';

class Home extends Component {

      render() {
        return (
            <div>
                <div className="text-center">
                    <HeaderImage/>
                    <div className="content">
                    <ArticleCard/>
                    </div>
                    
                </div>   

            </div>
        );
    }
}

export default Home;