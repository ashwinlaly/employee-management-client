import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import EditForm from './EditForm';
import { getDepartment,patchDepartment } from '../../../Redux/actions/departmentAction';

class EditDepartment extends Component {
    componentDidMount() {
        let {id} = this.props.match.params
        if(this.props.department.currentDepartment == null){
            this.props.getDepartment(id)
        }
    }
    _onhandleSubmit = (data) => {
        this.props.patchDepartment(data._id, data)
    }

    render() {
        return (
            <Fragment>
                <h1>Edit Department</h1>
                {(this.props.department ? 
                    <EditForm onSubmit={this._onhandleSubmit} {...this.props}/> : null)}                
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    department: state.departments
})

const mapDispatchToProps = {
    patchDepartment,
    getDepartment
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDepartment);