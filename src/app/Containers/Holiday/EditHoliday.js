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
import {updateHoliday, getOneHoliday} from '../../../Redux/actions/holidayAction';
import {renderInput, renderError, renderSelect} from '../../Components/RenderFields';


class EditHoliday extends Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getOneHoliday(id)
    }

    _handleSubmit = (data) => {
        this.props.updateHoliday(data._id, data)
    }

    render() {
        const {handleSubmit} = this.props
        return (
            <div>
                <h1>Edit Holiday</h1>
                {(this.props.holiday.currentHoliday) ? 
                <Fragment>
                    <Container fluid>
                        <Row xs={12} md={12}>
                            <Col xs={12}>
                                <Card id="card">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Form onSubmit={handleSubmit(this._handleSubmit)} method="post">
                                            <Field name="name" component={renderInput} label="Enter the Name"/>
                                            <Field name="date" type="date" component={renderInput} label="Enter the Date"/>
                                            <Field name="status" label="Select the Status" component={renderSelect} options={this.props.statues} selectOptionName="name" id="_id" selectText="select Status"/>
                                            <Button variant="primary" type="submit" >Submit</Button>
                                            <Link className="btn btn-danger" to="/home/holiday">Back</Link>
                                        </Form>
                                    </Card.Body>
                                </Card>
                                <DisplayMessage {...this.props} renderError={renderError}/>
                            </Col>
                        </Row>
                    </Container>
                </Fragment> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    holiday: state.holidays,
    statues: state.common.statues,
    initialValues: state.holidays.currentHoliday
})

const mapDispatchToProps = {
    getOneHoliday,
    updateHoliday,
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

EditHoliday = reduxForm({form : "EditHoliday", validate})(EditHoliday)
export default connect(mapStateToProps, mapDispatchToProps)(EditHoliday);