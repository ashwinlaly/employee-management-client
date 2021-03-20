import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {
    getuserLeave,
    approveLeave
} from '../../../Redux/actions/userAction';
import TableList from '../../Components/TableList';

class Leave extends Component {
    componentDidMount() {
        this.props.getuserLeave()
    }
    approveLeave = (_id, status) => {
        let data = {
            leave_id : _id,
            status : (status) ? "1" : "0"
        }
        this.props.approveLeave(data)
    }
    render() {
        return (
            <Fragment>
                <h1>Leave History</h1>
                <Link to="/home/leave/apply" className="btn btn-warning"> Request Leave </Link>
                <TableList 
                    type="leaves"
                    url="/home/leaves/"
                    header={this.header} 
                    content={this.props.users.leaves}
                    approveLeave={this.approveLeave}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = {
    getuserLeave,
    approveLeave
}

export default connect(mapStateToProps, mapDispatchToProps)(Leave);