import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';
import {loginAction} from '../../../Redux/actions/userAction';

const mapStateProps = ({common}) => ({
    errors: common.errors,
    errormessage : common.errormessage,
    successmessage: common.successmessage,
})

const mapDispatchToProps = {
    loginAction
}

export class Login extends Component {
    _onhandleSubmit = (e) => {
        this.props.loginAction(e)
    }
    render() {
        return (
            <Fragment>
                <LoginForm onSubmit={this._onhandleSubmit} {...this.props}/>
            </Fragment>
        );
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Login);