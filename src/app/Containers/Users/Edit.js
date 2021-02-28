import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import {getUser} from '../../../Redux/actions/userAction';


const mapStateToProps = ({users}) => ({
    user : users.user
})

const mapDispatchToProps = {
    getUser
}

const Edit = ({getUser, user}) => {
    
    let { id } = useParams();
    getUser(id)
   
    return (
        <div>
            <h1>Edit User</h1>
            {(user) ? 
                user.name : null
            }

            <Button variant="primary" type="submit" >Submit</Button>
            <Link to="/home/users" className="btn btn-danger">Back</Link>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);