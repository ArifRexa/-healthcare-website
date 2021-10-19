import React, { useEffect, useState } from 'react';
import ServicesData from './ServicesData';
import "./Services.css"
import { Container } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Container>

                <h1 className="text-center my-5">OUR SERVICES</h1>
                <div className="services-card-style m-4">

                    {
                        services.map(srvc => <ServicesData key={srvc.id} srvc={srvc}></ServicesData>)
                    }
                </div>

            </Container>

        </div>
    );
};

export default Services;