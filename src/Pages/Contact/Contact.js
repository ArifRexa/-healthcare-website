import React from 'react';
import { Col, Container, Form, Row, Button, FloatingLabel } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <h1 className="text-center my-5">CONTACT US</h1>

            <Container>
                <Row xs={1} md={2}>

                    <div md={4} className="text-center my-5">
                        <h1 >Hot Line</h1>

                        <h3><i className="fas fa-headset"></i> Hotline: 10666</h3>
                        <h3><i className="fas fa-calendar-check"></i> Appointment: 02 22 22 62 466 </h3>
                        <h3><i className="fas fa-ambulance"></i> Emergency: +880 1914 001234</h3>

                    </div>

                    <div md={8}>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" required />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Phone Number" required />
                                </Form.Group>


                            </Row>

                            <Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>


                            </Row>

                            <Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>

                            </Row>

                            <Row className="mb-3">

                                <FloatingLabel controlId="floatingTextarea2" label="Write a message" >
                                    <Form.Control

                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>

                            </Row>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Row>
            </Container>

        </div>
    );
};

export default Contact;