import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import DisplayMessage from '../../Components/DisplayMessage';
import {renderInput, renderSelect} from '../../Components/RenderFields';

class AddForm extends Component {
    render() {
        const {handleSubmit} = this.props
        return (
            <Fragment>
                <Container fluid>
                    <Row xs={12} md={12}>
                        <Col xs={12}>
                            <Card id="card">
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Form onSubmit={handleSubmit} method="post">
                                        <Field name="emp_id" component={renderInput} label="Enter the Employee Number"/>
                                        <Field name="name" component={renderInput} label="Enter the Name"/>
                                        <Field name="email" component={renderInput} label="Enter the Email"/>
                                        <Field name="department_id" label="Select the Department" component={renderSelect} options={this.props.departments} selectOptionName="name" id="_id" selectText="select a Department"/>
                                        <Field name="project" label="Select the Project" component={renderSelect} options={this.props.projects} selectOptionName="name" id="_id" selectText="select a Project"/>
                                        <Field name="status" label="Select the Status" component={renderSelect} options={this.props.statues} selectOptionName="name" id="_id" selectText="select Status"/>
                                        <Button variant="primary" type="submit" >Submit</Button>
                                        <Link className="btn btn-danger" to="/home/user">Back</Link>
                                    </Form>
                                </Card.Body>
                            </Card>
                            <DisplayMessage {...this.props.users}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.emp_id) {
        errors.emp_id = 'Please enter a Employee Number'
    }
    if(!formValues.name) {
        errors.name = 'Please enter a valid Name'
    }
    if(!formValues.email) {
        errors.email = 'Please enter a valid Email'
    }
    if(!formValues.department_id) {
        errors.department_id = 'Please enter a Department'
    }
    return errors;
}

export default reduxForm({
    form: 'AddUserForm',
    validate
})(AddForm);