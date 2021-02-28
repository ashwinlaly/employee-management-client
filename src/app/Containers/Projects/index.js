import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import TableList from '../../Components/TableList';
import { getProjects } from '../../../Redux/actions/projectAction';

class Project extends Component {
    header = ["name"]
    componentDidMount() {
        this.props.getProjects()
    }
    render() {
        return (
            <div>
                <h1>All Projects</h1>
                <Link to="/home/project/add" className="btn btn-warning"> Add New </Link>
                <TableList 
                    type="project"
                    url="/home/project/"
                    header={this.header} 
                    content={this.props.projects.projects}
                />
            </div>
        )
    }
}

const mapStateToProps = ({projects}) => ({
    projects
})

const mapDispatchToProps = {
    getProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);