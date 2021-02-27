import React, { Component, Fragment, lazy } from 'react';

import {Switch, Route, Redirect, Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const User = lazy(() => import("../Containers/Users"));
const Project = lazy(() => import("../Containers/Projects"));

class Header extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <NavDropdown title="" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                    </NavDropdown>
                </ul>
            </div>
        </nav>
        )
    }
}

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
                            <Link to="/home/user" className="list-group-item list-group-item-action bg-light">Users</Link>
                            <Link to="/home/project" className="list-group-item list-group-item-action bg-light">Projects</Link>
                            <Link to="/home/user" className="list-group-item list-group-item-action bg-light">Departments</Link>
                            <Link to="/home/user" className="list-group-item list-group-item-action bg-light">Leave History</Link>
                        </div>
                    </div>

                    <div id="page-content-wrapper">
                        <Header />
                        <div className="container-fluid">
                            <Switch>
                                <PrivateRoute exact path="/home/project" component={Project}/>
                                <PrivateRoute exact path="/home/user" component={User}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Sidebar;