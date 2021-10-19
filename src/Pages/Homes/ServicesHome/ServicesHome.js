import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServicesHomeData from './ServicesHomeData';

const ServicesHome = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)))
    }, [])
    return (
        <div>

            <h1 className="text-center my-5">OUR SERVICES</h1>
            <div className="card-style ">

                {
                    services.map(srvc => <ServicesHomeData key={srvc.id} srvc={srvc}></ServicesHomeData>)
                }
            </div>
            <Link className="ms-4" to="/services"><Button>See more</Button></Link>



        </div>
    );
};

export default ServicesHome;