import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import EditForm from './EditForm';
import {getUser, patchUser} from '../../../Redux/actions/userAction';
import {getDepartments} from '../../../Redux/actions/departmentAction';

class EditUser extends Component {
    componentDidMount(){
        let _id = this.props.match.params.id
        this.props.getDepartments()
        this.props.getUser(_id)
    }

    _handleSubmit = (data) => {
        this.props.patchUser(data._id, data)
    }

    render() {
        return (
            <Fragment>
                {(this.props.user.currentUser)? 
                    <EditForm {...this.props} onSubmit={this._handleSubmit}/> : null }
            </Fragment>
        )
    }
}

const mapStateToProps = ({users}) => ({
    user : users
})

const mapDispatchToProps = {
    getUser,
    patchUser,
    getDepartments
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);