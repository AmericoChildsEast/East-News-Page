import React, {Component} from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../actions';

class SignOut extends Component {
    constructor(props) {
        super(props);
        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        console.log("faggot");
        this.props.history.push('/signin');
    }
    
    render() {
        return (
            <div>
                Signout component

                {this.redirect}
            </div>
        );
    }
}

export default compose(
    connect( null, actions)
    )(SignOut);