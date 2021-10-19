import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServicesHomeData = (props) => {
    const { id, serviceName, details } = props.srvc
    return (
        <div>
            <Card className="m-4 active-card-style">
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

export default ServicesHomeData;