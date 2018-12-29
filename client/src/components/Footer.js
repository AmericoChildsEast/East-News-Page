import React, { Component } from 'react';

class Footer extends Component {

      render() {

        document.body.style.backgroundColor = "#1E0139";

        return (
            <div>
                <div className="container" width="100%" height="auto" >        
                        <img src={require('../content/eastlogo.png')} width="75" style={{marginTop: "20px"}} />
                 </div>
            </div>
        );
    }
}

export default Footer;