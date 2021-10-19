import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ConsultantDetails.css"

const ConsultantData = (props) => {
    const { id, name, specialistAt, thumbUrl } = props.doctor
    return (
        <div>


            <Card style={{ width: 'max-width: 54px' }} className="active-card-style">
                <Row xs={2}>
                    <div md={4}>
                        <Card.Img variant="top" src={thumbUrl} height="250px" />
                    </div>

                    <Card.Body md={8} className="mt-5 px-3 text-center">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {specialistAt}
                        </Card.Text>
                        <Row xs={1} md={2} >

                            <Link to="/appointment" className="link-style">
                                Appointment
                            </Link>

                            <Link to={`/doc/${id}`} className="link-style">
                                See Details
                            </Link>
                        </Row>

                    </Card.Body>
                </Row>
            </Card>

        </div>
    );
};

export default ConsultantData;