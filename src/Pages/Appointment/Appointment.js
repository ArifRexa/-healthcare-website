import React from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div>
            <h1 className="text-center my-5">Appointment</h1>
            <Container>
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

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" placeholder="Age" required />
                        </Form.Group>

                    </Row>

                    <Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Start date</Form.Label>
                            <Form.Control type="date" id="start" name="trip-start"
                                value="2018-07-22" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Start time</Form.Label>
                            <Form.Control type="time" id="appt" name="appt"
                                min="09:00" max="18:00" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Department</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Emergency</option>
                                <option>ANESTHESIOLOGY</option>
                                <option>CANCER SURGERY (ONCOSURGERY)</option>
                                <option>CARDIOLOGY</option>
                                <option>CLINICAL HEMATOLOGY</option>
                                <option>CRITICAL CARE - ICU</option>
                                <option>DENTISTRY</option>
                                <option>DIABETES & ENDOCRINOLOGY</option>
                                <option>NEPHROLOGY</option>
                                <option>NEUROLOGY</option>
                                <option>ORTHOPEDICS</option>
                                <option>PSYCHIATRY</option>
                                <option>UROLOGY</option>
                                <option>RADIOLOGY AND IMAGING</option>
                                <option>OPHTHALMOLOGY</option>
                                <option>NEUROSURGERY</option>
                                <option>PLASTIC SURGERY</option>
                                <option>VASCULAR SURGERY</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Container>

        </div>
    );
};

export default Appointment;