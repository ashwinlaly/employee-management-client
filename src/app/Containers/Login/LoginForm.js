import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import DisplayMessage from '../../Components/DisplayMessage';
import { renderInput } from '../../Components/RenderFields';

class LoginForm extends Component {
    render() {
        const {handleSubmit} = this.props
        return (
            <Container fluid>
                <Row xs={12} md={12}>
                    <Col/>
                    <Col xs={6}>
                        <Card id="card">
                            <Card.Header>Login</Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Form onSubmit={handleSubmit} method="post">
                                    <Field name="email" component={renderInput} label="Enter the Email"/>
                                    <Field name="password" type="password" component={renderInput} label="Enter the Password"/>
                                    <Button variant="primary" type="submit" >Submit</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <DisplayMessage {...this.props}/>
                    </Col>
                    <Col />
                </Row>
            </Container>
        )
    }
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.email) {
        errors.email = 'Please enter a valid Email'
    }
    if(!formValues.password) {
        errors.password = 'Please enter a valid Password'
    }
    return errors;
}


export default reduxForm({
    form : "LoginForm",
    validate
})(LoginForm);