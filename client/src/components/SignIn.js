import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import GoogleLogin from 'react-google-login';

import * as actions from '../actions';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    async responseGoogle(res) {
        console.log('responseGoogle', res);
        await this.props.oauthGoogle({ accessToken: res.accessToken, googleId: res.googleId, name: res.profileObj.name, email: res.profileObj.email});
        if (!this.props.history.push('/'));
    }

    render() {
        return (
            <div>
                { this.props.errorMessage ? 
                <div className="alert alert-danger">
                    {this.props.errorMessage}
                </div>
                : null }

                <div className="text-center">
                    { this.props.errorMessage ? 
                    <div className="alert alert-danger">
                        {this.props.errorMessage}
                    </div>
                    : null }
                    <div class="alert alert-success">
                        Utilize your MMSD email
                    </div>
                    <GoogleLogin 
                        clientId="726864255809-1eo7pss12cu502n01rvobtq72ns8ah32.apps.googleusercontent.com"
                        buttonText="Sign-In"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        className="btn btn-outline-danger"
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect( null, actions)
    )(SignIn);