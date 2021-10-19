import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ConsultantData from './ConsultantData';

const Consultant = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h1 className="text-center my-5">OUR CONSULTANTS</h1>
            <Container>
                <Row xs={1} md={2} className="g-4 m-0">
                    {
                        doctors.map(doctor => <ConsultantData key={doctor.id} doctor={doctor}></ConsultantData>)

                    }
                </Row>
            </Container>


        </div>
    );
};

export default Consultant;