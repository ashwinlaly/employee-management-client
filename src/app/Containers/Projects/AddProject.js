import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddForm from './AddForm';
import DisplayMessage from '../../Components/DisplayMessage';
import { createProject } from '../../../Redux/actions/projectAction';
import { getAllUser } from '../../../Redux/actions/userAction';

class AddProject extends Component {
    componentDidMount() {
        this.props.getAllUser()
    }
    _createProject = (data) => {
        console.log(data)
        // this.props.createProject(data)
    }
    render() {
        return (
            <div>
                <h1>Add Project</h1>
                <AddForm onSubmit={this._createProject} users={this.props.lead.users} />  
                {(this.props.projects.errors) ? 
                    <DisplayMessage
                        errormessage={this.props.projects.errormessage} 
                        errors={this.props.projects.errors} /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    projects: state.projects,
    lead: state.users
})

const mapDispatchToProps = {
    createProject,
    getAllUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);