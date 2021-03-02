import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AddForm from './AddForm';
import { createDepartment } from '../../../Redux/actions/departmentAction';

class AddDepartment extends Component {
    _onhandleSubmit = (data) => {
        this.props.createDepartment(data)
    }

    render() {
        return (
            <Fragment>
                <h1>Add Department</h1>
                <AddForm onSubmit={this._onhandleSubmit}/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    createDepartment
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDepartment);