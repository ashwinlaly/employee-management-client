import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const mystyle = {
    card : {
        top: '10%'
    }
}


class AddUser extends Component {
    render() {
        return (
            <Container fluid>
                <Row xs={12} md={12}>
                    <Col xs={12}>
                        <Card id="card" style={mystyle.card}>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Form onSubmit={this._onhandleSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" >Submit</Button>
                                    <Link to="/home/users" className="btn btn-danger">Back</Link>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddUser;