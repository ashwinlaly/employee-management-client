import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import {renderInput, renderError, renderSelect} from '../../Components/RenderFields';

const mystyle = {
    card : {
        top: '10%'
    },
    error : {
        color: 'red'
    }    
}

class AddForm extends Component{
    render() {
        const {handleSubmit} = this.props
        if(this.props.users) {
            return (
                <Fragment>
                    <Container fluid>
                        <Row xs={12} md={12}>
                            <Col xs={12}>
                                <Card id="card" style={mystyle.card}>
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Form onSubmit={handleSubmit} method="post">
                                            <Field name="name" component={renderInput} label="Enter the Name"/>
                                            <Field name="lead" component={renderSelect} label="Select the Lead" options={this.props.users} selectOptionName="name" id="_id" />
                                            <Button variant="primary" type="submit" >Submit</Button>
                                            <Link className="btn btn-danger" to="/home/projects">Back</Link>
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
    // if(!formValues.lead.length <= 0) {
    //     errors.lead = 'Please enter a valid Lead'
    // }
    return errors;
}


export default reduxForm({
    form: 'AddProject',
    validate
})(AddForm);