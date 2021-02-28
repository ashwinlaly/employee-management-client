import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {logout} from '../../Redux/actions/userAction';

const mapDispatchToProps = {
    logout
}

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
                        <NavDropdown.Item onClick={this.props.logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </ul>
            </div>
        </nav>
        )
    }
}


export default connect(null, mapDispatchToProps)(Header);