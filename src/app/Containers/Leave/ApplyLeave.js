import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field, reduxForm}  from 'redux-form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import {renderInput} from '../../Components/RenderFields';
import {applyLeave} from '../../../Redux/actions/userAction';

class ApplyLeave extends Component {
    _handleSubmit = (data) => {
        this.props.applyLeave(data)
    }

    render() {
        const {handleSubmit} = this.props
        return (
            <Fragment>
                <h1>Apply For Leave</h1>
                <Container fluid>
                    <Row xs={12} md={12}>
                        <Col xs={12}>
                            <Card id="card" >
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Form onSubmit={handleSubmit(this._handleSubmit)} method="post">
                                        <Field name="from_date" type="date" component={renderInput} label="Select From Date"/>
                                        <Field name="to_date" type="date" component={renderInput} label="Select To Date"/>
                                        <Field name="reason" component={renderInput} label="Reason for leave"/>
                                        <Button variant="primary" type="submit" >Submit</Button>
                                        <Link className="btn btn-danger" to="/home/leave">Back</Link>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.from_date) {
        errors.from_date = 'Please enter From Date'
    }
    if(!formValues.to_date) {
        errors.to_date = 'Please select To Date'
    }
    if(!formValues.reason) {
        errors.reason = 'Please enter Reason'
    }
    return errors;
}

const mapDispatchToProps = {
    applyLeave
}

ApplyLeave = reduxForm({form: "ApplyLeave", validate})(ApplyLeave)
export default connect(null, mapDispatchToProps)(ApplyLeave);