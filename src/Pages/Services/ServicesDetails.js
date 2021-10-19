import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServicesDetails = () => {
    const { serviceId } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const v = data.find(p => p.id == serviceId)
                setDetails(v)
            })

    }, [serviceId])
    return (
        <div>
            <Container>
                <Card className="w-75 my-5 card-centering">
                    <Row xs={1} md={2}>
                        <div md={4}>

                            <Card.Img variant="top" src={details.thumbUrl} />
                        </div>
                        <Card.Body md={8} className=" px-4">
                            <Card.Title> <h1>{details.serviceName}</h1></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{details.qualification}</Card.Subtitle>
                            <Card.Text>
                                {details.position}
                            </Card.Text>
                            <Card.Text>
                                {details.specialistAt}
                            </Card.Text>
                            <Card.Text>
                                {details.docDetails}
                            </Card.Text>
                            <Link to="/appointment"><Button>Make Appointment</Button></Link>
                        </Card.Body>
                    </Row>
                </Card>

                <Link to="/services" className="btn-position"><Button>See All</Button></Link>

            </Container>

        </div>
    );
};

export default ServicesDetails;