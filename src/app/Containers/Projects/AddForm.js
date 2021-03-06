import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import {renderInput, renderSelect} from '../../Components/RenderFields';

class AddForm extends Component{
    render() {
        const {handleSubmit} = this.props
        if(this.props.users) {
            return (
                <Fragment>
                    <Container fluid>
                        <Row xs={12} md={12}>
                            <Col xs={12}>
                                <Card id="card" >
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Form onSubmit={handleSubmit} method="post">
                                            <Field name="name" component={renderInput} label="Enter the Name"/>
                                            <Field name="closes_at" type="date" component={renderInput} label="Enter the Closing Date"/>
                                            <Field name="lead" component={renderSelect} options={this.props.users} selectOptionName="name" id="_id" selectText="Pleae select an Lead"/>
                                            <Button variant="primary" type="submit" >Submit</Button>
                                            <Link className="btn btn-danger" to="/home/project">Back</Link>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            )
        } else {
            return null;
        }
    }
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.name) {
        errors.name = 'Please enter a valid Name'
    }
    if(!formValues.lead) {
        errors.lead = 'Please enter a valid Lead'
    }
    if(!formValues.closes_at) {
        errors.closes_at = 'Please enter a Closing date'
    }
    return errors;
}


export default reduxForm({
    form: 'AddProject',
    validate
})(AddForm);