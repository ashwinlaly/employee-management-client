import React, { Component } from 'react';

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
                    <Col/>
                    <Col xs={6}>
                        <Card id="card" style={mystyle.card}>
                            <Card.Header>Login</Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Form onSubmit={this._onhandleSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" >Submit</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col />
                </Row>
            </Container>
        )
    }
}

export default AddUser;