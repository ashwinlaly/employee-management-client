import React, {Fragment} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import DisplayMessage from '../../Components/DisplayMessage';
import {renderInput, renderError, renderSelect} from '../../Components/RenderFields';

let EditForm = (props) => {
    return(
        <Fragment>
            <Container fluid>
                <Row xs={12} md={12}>
                    <Col xs={12}>
                        <Card id="card">
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Form onSubmit={props.handleSubmit} method="post">
                                    <Field name="name" component={renderInput} type="text" label="Enter the Name"/>
                                    <Field name="original_name" component={renderInput} label="Enter the Original Name"/>
                                    <Field name="total_leave" component={renderInput} label="Enter Days of Leave"/>
                                    <Field name="status" label="Select the Status" component={renderSelect} options={props.statues} selectOptionName="name" id="_id" selectText="select Status"/>
                                    <Button variant="primary" type="submit" >Submit</Button>
                                    <Link className="btn btn-danger" to="/home/department">Back</Link>
                                </Form>
                            </Card.Body>
                        </Card>
                        <DisplayMessage {...props} renderError={renderError}/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.name) {
        errors.name = 'Please enter a valid Name'
    }
    if(!formValues.total_leave) {
        errors.total_leave = 'Please enter total days of leave'
    }
    if(!formValues.original_name) {
        errors.original_name = 'Please enter a valid Original Name'
    }
    return errors;
}

EditForm = reduxForm({form: "EditForm", validate})(EditForm);

const mapStateToProps = (state) => ({
    statues: state.common.statues,
    initialValues : state.departments.currentDepartment
})

EditForm = connect(mapStateToProps,{})(EditForm)
export default EditForm;