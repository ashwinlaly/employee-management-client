import React, { Component } from 'react';
import {connect} from 'react-redux';

import EditForm from './EditForm';
import {getAllUser} from '../../../Redux/actions/userAction';
import {updateProject, getProject} from '../../../Redux/actions/projectAction';

class EditProject extends Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getAllUser()
        this.props.getProject(id)
    }

    _handleSubmit = (data) => {
        this.props.updateProject(data._id, data)
    }

    render() {
        return (
            <div>
                <h1>Edit Project</h1>
                {(this.props.project.currentProject) ? 
                    <EditForm onSubmit={this._handleSubmit} {...this.props}/> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    project: state.projects,
    users: state.users
})

const mapDispatchToProps = {
    getProject,
    getAllUser,
    updateProject,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);