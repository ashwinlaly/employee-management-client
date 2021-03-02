import React, { Component, Fragment, lazy } from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

const Header = lazy(() => import("./Header"));

const User = lazy(() => import("../Containers/Users"));
const EditUser = lazy(() => import("../Containers/Users/Edit"));
const AddUser = lazy(() => import("../Containers/Users/AddUser"));

const Project = lazy(() => import("../Containers/Projects"));
const AddProject = lazy(() => import("./Projects/Add"));
const EditProject = lazy(() => import("../Containers/Projects/Edit"));

const Department = lazy(() => import("../Containers/Department"));
const AddDepartment = lazy(() => import("../Containers/Department/AddDepartment"));
const EditDepartment = lazy(() => import("../Containers/Department/EditDepartment"));

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('jwt') ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                <div className="d-flex" id="wrapper">
                    <div className="bg-light border-right" id="sidebar-wrapper">
                        <div className="sidebar-heading"> EMP MANAGE </div>
                        <div className="list-group list-group-flush">
                            <Link to="/home" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                            <Link to="/home/users" className="list-group-item list-group-item-action bg-light">Employee</Link>
                            <Link to="/home/projects" className="list-group-item list-group-item-action bg-light">Projects</Link>
                            <Link to="/home/department" className="list-group-item list-group-item-action bg-light">Departments</Link>
                            <Link to="/home/leave" className="list-group-item list-group-item-action bg-light">Leave History</Link>
                        </div>
                    </div>

                    <div id="page-content-wrapper">
                        <Header />
                        <ToastContainer />
                        <div className="container-fluid">
                            <Switch>
                                <PrivateRoute exact path="/home/users" component={User}/>
                                <PrivateRoute exact path="/home/user/add" component={AddUser}/>
                                <PrivateRoute exact path="/home/user/:id" component={EditUser}/>
                                <PrivateRoute exact path="/home/projects" component={Project}/>
                                <PrivateRoute exact path="/home/project/add" component={AddProject}/>
                                <PrivateRoute exact path="/home/project/:id" component={EditProject}/>
                                <PrivateRoute exact path="/home/department" component={Department}/>
                                <PrivateRoute exact path="/home/department/add" component={AddDepartment}/>
                                <PrivateRoute exact path="/home/department/:id" component={EditDepartment}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Sidebar;