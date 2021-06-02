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

import {renderInput} from '../../../Components/RenderFields';
import DisplayMessage from '../../../Components/DisplayMessage';
import {getProfile} from '../../../../Redux/actions/userAction';

class UpdateProfile extends Component {
    componentDidMount() {
        this.props.getProfile()
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <Fragment>
                <Container fluid>
                    <Row xs={12} md={12}>
                        <Col xs={12}>
                            <Card id="card">
                                <Card.Body>
                                    <Card.Title>Update Profile</Card.Title>
                                    <Form onSubmit={handleSubmit} method="post">
                                        <Field name="name" component={renderInput} label="Enter the Name"/>
                                        <Field name="email"   props={{disabled: true}} component={renderInput} label="Email"/>
                                        <Button variant="primary" type="submit" >Submit</Button>
                                        <Link className="btn btn-danger" to="/home/">Back</Link>
                                    </Form>
                                </Card.Body>
                            </Card>
                            <DisplayMessage {...this.props.user}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    initialValues : state.users.profile
})

const mapDispatchToProps = {
    getProfile
}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.name) {
        errors.name = "Please Enter Name"
    }
    return errors
}

UpdateProfile = reduxForm({form: "UpdateProfile", validate})(UpdateProfile)
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);