import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import DisplayMessage from '../../../Components/DisplayMessage';
import {updatePassword} from '../../../../Redux/actions/userAction'; 
import {renderInput, renderError} from '../../../Components/RenderFields';


const mapDispatchToProps = {
    updatePassword
}

class UpdatePassword extends Component {
    _handleSubmit = (data) => {
        this.props.updatePassword(data)
    }

    render() {
        return (
            <Fragment>
                <h1>Update Password</h1>
                <Container fluid>
                    <Row xs={12} md={12}>
                        <Col xs={12}>
                            <Card id="card">
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Form onSubmit={this.props.handleSubmit(this._handleSubmit)} method="post">
                                        <Field name="password" component={renderInput} label="Enter Old Password"/>
                                        <Field name="new_password" component={renderInput} label="Enter New Password"/>
                                        <Button variant="primary" type="submit" >Submit</Button>
                                        <Link className="btn btn-danger" to="/home">Back</Link>
                                    </Form>
                                </Card.Body>
                            </Card>
                            <DisplayMessage {...this.props} renderError={renderError}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

const validate = (formValues) => {
    let errors = {}
    if(!formValues.password) {
        errors.password = "Old Password is required"
    }
    if(!formValues.new_password) {
        errors.new_password = "New Password is required"
    }
    return errors
}

UpdatePassword = reduxForm({form : "UpdatePassword", validate})(UpdatePassword)
export default connect(null, mapDispatchToProps)(UpdatePassword);