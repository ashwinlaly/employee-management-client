import React, { Component, Fragment, lazy } from 'react';
import {connect} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {Switch, Route, Redirect, Link} from 'react-router-dom';

const Header = lazy(() => import("./Header"));
const Dashboard = lazy(() => import("./Dashboard"));

const User = lazy(() => import("../Containers/Users"));
const AddUser = lazy(() => import("../Containers/Users/AddUser"));
const EditUser = lazy(() => import("../Containers/Users/EditUser"));
const UpdateProfile = lazy(() => import("../Containers/Users/Profile/UpdateProfile"))

const Project = lazy(() => import("../Containers/Projects"));
const AddProject = lazy(() => import("./Projects/AddProject"));
const EditProject = lazy(() => import("../Containers/Projects/EditProject"));

const Department = lazy(() => import("../Containers/Department"));
const AddDepartment = lazy(() => import("../Containers/Department/AddDepartment"));
const EditDepartment = lazy(() => import("../Containers/Department/EditDepartment"));

const UpdatePassword = lazy(() => import("../Containers/Users/Profile/UpdatePassword"));

const LeaveHistory = lazy(() => import("../Containers/Leave"));
const ApplyLeave = lazy(() => import("../Containers/Leave/ApplyLeave"));

const Holiday = lazy(() => import("../Containers/Holiday"));
const AddHoliday = lazy(() => import("../Containers/Holiday/AddHoliday"));
const EditHoliday = lazy(() => import("../Containers/Holiday/EditHoliday"));
const HolidayCalendar = lazy(() => import("../Containers/Holiday/HolidayCalendar"));

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('jwt') ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

const RoleBasedLink = ({isAdmin}) => {
    if(isAdmin === "true") {
        return (
            <Fragment>
                <Link to="/home" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                <Link to="/home/user" className="list-group-item list-group-item-action bg-light">Employee</Link>
                <Link to="/home/project" className="list-group-item list-group-item-action bg-light">Projects</Link>
                <Link to="/home/department" className="list-group-item list-group-item-action bg-light">Departments</Link>
                <Link to="/home/leave" className="list-group-item list-group-item-action bg-light">For My Approval</Link>
                <Link to="/home/holiday" className="list-group-item list-group-item-action bg-light">Holiday</Link>
                <Link to="/home/user/profile/update" className="list-group-item list-group-item-action bg-light">Update Profile</Link>
            </Fragment>
        )
    }else {
        return (
            <Fragment>
                <Link to="/home" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                <Link to="/home/leave" className="list-group-item list-group-item-action bg-light">Leave History</Link>
                <Link to="/home/holiday/calendar" className="list-group-item list-group-item-action bg-light">Holiday Calendar</Link>
                <Link to="/home/user/profile/update" className="list-group-item list-group-item-action bg-light">Update Profile</Link>
                <Link to="/home/user/password/update" className="list-group-item list-group-item-action bg-light">Update Password</Link>
            </Fragment>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                <div className="d-flex" id="wrapper">
                    <div className="bg-light border-right" id="sidebar-wrapper">
                        <div className="sidebar-heading"> EMP MANAGE </div>
                        <div className="list-group list-group-flush">
                            <RoleBasedLink isAdmin={localStorage.getItem("isAdmin")}/>
                        </div>
                    </div>

                    <div id="page-content-wrapper">
                        <Header />
                        <ToastContainer />
                        <div className="container-fluid">
                            <Switch>
                                <PrivateRoute exact path="/home" component={Dashboard} />
                                <PrivateRoute exact path="/home/user" component={User} />
                                <PrivateRoute exact path="/home/user/add" component={AddUser} />
                                <PrivateRoute exact path="/home/user/profile/update" component={UpdateProfile} />
                                <PrivateRoute exact path="/home/user/password/update" component={UpdatePassword} />
                                <PrivateRoute exact path="/home/user/:id" component={EditUser} />
                                <PrivateRoute exact path="/home/leave/apply" component={ApplyLeave} />
                                <PrivateRoute exact path="/home/leave" component={LeaveHistory} />
                                <PrivateRoute exact path="/home/project" component={Project} />
                                <PrivateRoute exact path="/home/project/add" component={AddProject} />
                                <PrivateRoute exact path="/home/project/:id" component={EditProject} />
                                <PrivateRoute exact path="/home/department" component={Department} />
                                <PrivateRoute exact path="/home/department/add" component={AddDepartment} />
                                <PrivateRoute exact path="/home/department/:id" component={EditDepartment} />
                                <PrivateRoute exact path="/home/holiday" component={Holiday} />
                                <PrivateRoute exact path="/home/holiday/add" component={AddHoliday} />
                                <PrivateRoute exact path="/home/holiday/calendar" component={HolidayCalendar} />
                                <PrivateRoute exact path="/home/holiday/:id" component={EditHoliday} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.users.isAdmin
})

export default connect(mapStateToProps, {})(Sidebar);