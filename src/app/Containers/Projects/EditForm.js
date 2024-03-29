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

import DisplayMessage from '../../Components/DisplayMessage';
import {renderInput, renderError, renderSelect} from '../../Components/RenderFields';

class EditForm extends Component {
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
                                        <Field name="name" component={renderInput} label="Enter the Name"/>
                                        <Field name="closes_at" type="date" component={renderInput} label="Enter the Closing Date"/>
                                        <Field name="lead" component={renderSelect} options={this.props.users.users} selectOptionName="name" id="_id" selectText="Pleae select an Lead" label="Select the Lead"/>
                                        <Field name="status" label="Select the Status" component={renderSelect} options={this.props.statues} selectOptionName="name" id="_id" selectText="select Status"/>
                                        <Button variant="primary" type="submit" >Submit</Button>
                                        <Link className="btn btn-danger" to="/home/project">Back</Link>
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

const mapStateToProps = (state) => ({
    statues: state.common.statues,
    initialValues: state.projects.currentProject
})
EditForm = reduxForm({form : "EditProjectForm", validate})(EditForm)
EditForm = connect(mapStateToProps, {})(EditForm)
export default EditForm;