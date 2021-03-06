import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import AddForm from './AddForm';
import {createUser} from '../../../Redux/actions/userAction';
import {getDepartments} from '../../../Redux/actions/departmentAction';


class AddUser extends Component {
    componentDidMount() {
        this.props.getDepartments()
    }

    _handleSubmit = (data) => {
        this.props.createUser(data)
    }

    render() {
        return (
            <Fragment>
                <AddForm onSubmit={this._handleSubmit} departments={this.props.department.departments}/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    department: state.departments
})
const mapDispatchToProps = {
    createUser,
    getDepartments
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);