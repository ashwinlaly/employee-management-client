import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import DisplayMessage from '../../Components/DisplayMessage';
import { createHoliday } from '../../../Redux/actions/holidayAction';
import {renderInput, renderSelect} from '../../Components/RenderFields';

class AddHoliday extends Component {
    _createHoliday = (data) => {
        this.props.createHoliday(data)
    }
    render() {
        const {handleSubmit} = this.props
        return (
            <Fragment>
                <Container fluid>
                    <Row xs={12} md={12}>
                        <Col xs={12}>
                            <Card id="card" >
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Form onSubmit={handleSubmit(this._createHoliday)} method="post">
                                        <Field name="name" component={renderInput} label="Enter the Name"/>
                                        <Field name="date" type="date" component={renderInput} label="Enter the Date"/>
                                        <Field name="status" label="Select the Status" component={renderSelect} options={this.props.statues} selectOptionName="name" id="_id" selectText="select Status"/>
                                        <Button variant="primary" type="submit" >Submit</Button>
                                        <Link className="btn btn-danger" to="/home/holiday">Back</Link>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                {(this.props.holidays.errors) ? 
                    <DisplayMessage
                        errormessage={this.props.holidays.errormessage} 
                        errors={this.props.holidays.errors} /> : null}
            </Fragment>
        )
    }
}

const validate = (formValues) => {
    const errors = {}

    if(!formValues.name) {
        errors.name = 'Please enter a valid Name'
    }
    if(!formValues.date) {
        errors.date = 'Please enter a date'
    }
    return errors;
}

const mapStateToProps = (state) => ({
    holidays: state.holidays,
    statues: state.common.statues
})

const mapDispatchToProps = {
    createHoliday
}

AddHoliday = reduxForm({form: 'AddHoliday', validate})(AddHoliday);
export default connect(mapStateToProps, mapDispatchToProps)(AddHoliday);