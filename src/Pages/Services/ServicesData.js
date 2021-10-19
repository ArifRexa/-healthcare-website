import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServicesData = (props) => {
    const { id, serviceName, details } = props.srvc
    return (
        <div>
            <Card style={{ width: '18rem' }} className="active-card-style">
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>

                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/service/${id}`}><Button><i className="fas fa-info"></i> See Details</Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default ServicesData;