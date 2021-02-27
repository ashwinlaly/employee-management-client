import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import DisplayMessage from '../../Components/DisplayMessage';

const mystyle = {
    card : {
        top: '10%'
    },
    error : {
        color: 'red'
    }
}

class LoginForm extends Component {

    renderInput = ({input, label, meta}) => {
        return(
            <Form.Group controlId={label}>
                <Form.Label>{label}</Form.Label>
                <Form.Control {...input} />
                {this.renderError(meta)}
            </Form.Group>
        )
    }
    
    renderError = ({error, touched}) => {
        return (touched) ? <div className="form-error">{error}</div> : null
    }
    
    render() {
        const {handleSubmit} = this.props
        return (
            <Container fluid>
                <Row xs={12} md={12}>
                    <Col/>
                    <Col xs={6}>
                        <Card id="card" style={mystyle.card}>
                            <Card.Header>Login</Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Form onSubmit={handleSubmit} method="post">
                                    <Field name="email" component={this.renderInput} label="Enter the Email"/>
                                    <Field name="password" component={this.renderInput} label="Enter the Passowrd"/>
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