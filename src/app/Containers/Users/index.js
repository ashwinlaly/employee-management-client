import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TableList from '../../Components/TableList';
import {getAllUser, deleteUser} from '../../../Redux/actions/userAction';


const mapStateToProps = ({users}) => ({
    users
})

const mapDispatchToProps = {
    getAllUser,
    deleteUser
}

class User extends Component {
    header = ["name", "email"]
    componentDidMount() {
        this.props.getAllUser()
    }

    _deleteUser = (_id) => {
        this.props.deleteUser(_id)
    }

    render() {
        return (
            <div>
                <h1>All User</h1>
                <Link to="/home/user/add" className="btn btn-warning"> Add New </Link>
                <TableList 
                    type="users"
                    url="/home/user/"
                    header={this.header} 
                    content={this.props.users.users} 
                    onDelete={this._deleteUser} 
                    getUser={this.props.getUser}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);