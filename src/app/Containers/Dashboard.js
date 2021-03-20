import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

const Dashboard = ({counts}) => {
    const Header = ["Users", "Project", "Department"]
    const keyValue = ["user", "project", "department"]
    return(
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
    )
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
    counts: state.common.counts
})

export default connect(mapStateToProps, {})(Dashboard);