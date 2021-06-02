import React, { Fragment, Component } from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

import {getProfile} from '../../Redux/actions/userAction';

const Dashboard = ({counts, isAdmin, getProfile, users}) => {
    const Header = ["Users", "Project", "Department"]
    const keyValue = ["user", "project", "department"]
    if(isAdmin === "true") {
        return(
            <Fragment>
                {(counts) ?
                    <Fragment>
                        <h1>Dashboard</h1>
                        <br/><br/>
                        <Accordion defaultActiveKey="0">
                            {keyValue.map((data, key) => {
                                return(
                                    <Card key={key}>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={key+1}>
                                                {Header[key]}
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={key+1}>
                                            <Card.Body>
                                                <ShowStatus status={counts[data]} />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            })}
                        </Accordion>
                    </Fragment>
                : null}
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <h1>Dashboard</h1>
                <br/><br/>
                <NormalUserDashboard getProfile={getProfile} profile={users.profile}/>
            </Fragment>
        );
    }
}

class NormalUserDashboard extends Component {
    componentDidMount() {
        this.props.getProfile()
    }
    render() {
        return (
            <Fragment>
                <Card>
                    <Card.Header> </Card.Header>                    
                    {(this.props.profile) ? 
                        <Card.Body>
                            Total Leaves  : {this.props.profile.department_id.total_leave} <br/>
                            Leaves Taken: {this.props.profile.taken_leave} <br/>
                            Available Leaves : {this.props.profile.department_id.total_leave - this.props.profile.taken_leave} <br/>
                        </Card.Body>
                    : null}
                </Card>
            </Fragment>
        )
    }
}

const ShowStatus = ({status}) => {
    return (
        <Fragment>
            Active : {status.active} <br/>
            InActive : {status.inactive}
        </Fragment>
    )
}

const mapStateToProps = (state) => ({    
    counts: state.common.counts,
    isAdmin: localStorage.getItem("isAdmin"),
    users: state.users
})

const mapDispatchToProps = {
    getProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);