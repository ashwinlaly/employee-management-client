import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableList from '../../Components/TableList';
import {deleteDepartment, getDepartments} from '../../../Redux/actions/departmentAction';


class Index extends Component {
    header = ["name", "original_name"]
    componentDidMount() {
        this.props.getDepartments()
    }
    _deleteDepartment = (_id) => {
        this.props.deleteDepartment(_id)
    }

    render() {
        return (
            <Fragment>
                <h1>All Departments</h1>
                <Link className="btn btn-warning" to="/home/department/add">Add Department </Link>
                <TableList 
                    type="users"
                    url="/home/department/"
                    header={this.header} 
                    content={this.props.departments.departments}
                    onDelete={this._deleteDepartment}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = ({departments}) => ({
    departments: departments
})

const mapDispatchToProps = {
    deleteDepartment,
    getDepartments
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);