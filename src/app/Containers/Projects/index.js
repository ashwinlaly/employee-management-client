import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import TableList from '../../Components/TableList';
import { getProjects, deleteProject } from '../../../Redux/actions/projectAction';

class Project extends Component {
    header = ["name"]
    
    componentDidMount() {
        this.props.getProjects()
    }

    _deleteProject = (_id) => {
        // console.log(_id)
        this.props.deleteProject(_id)
    }

    render() {
        return (
            <Fragment>
                <h1>All Projects</h1>
                <Link to="/home/project/add" className="btn btn-warning"> Add New </Link>
                <TableList 
                    type="project"
                    url="/home/project/"
                    header={this.header} 
                    content={this.props.projects.projects}
                    onDelete={this._deleteProject}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = ({projects}) => ({
    projects
})

const mapDispatchToProps = {
    getProjects,
    deleteProject
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);