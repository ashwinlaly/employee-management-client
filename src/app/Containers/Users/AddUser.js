import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import AddForm from './AddForm';
import {createUser} from '../../../Redux/actions/userAction';
import {getProjects} from '../../../Redux/actions/projectAction';
import {getDepartments} from '../../../Redux/actions/departmentAction';


class AddUser extends Component {
    componentDidMount() {
        this.props.getProjects()
        this.props.getDepartments()
    }

    _handleSubmit = (data) => {
        this.props.createUser(data)
    }

    render() {
        return (
            <Fragment>
                <AddForm onSubmit={this._handleSubmit} 
                        {...this.props}
                        projects = {this.props.project.projects} 
                        departments = {this.props.department.departments} />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    department: state.departments,
    project: state.projects,
    users: state.users,
    statues: state.common.statues
})
const mapDispatchToProps = {
    createUser,
    getProjects,
    getDepartments
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);