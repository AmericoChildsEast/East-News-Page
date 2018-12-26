
import React, { Component } from 'react';

import Showcase from './Showcase';

class Home extends Component {

      render() {
        return (
            <div>
                <div className="text-center">
                    <div className="container" style={{marginLeft: '40px', marginRight: '40px'}}>
                    <Showcase />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;