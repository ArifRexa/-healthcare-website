import React from 'react';
import { Button, Card, Carousel, Container } from 'react-bootstrap';
import "./Home.css"
import img1 from '../../../images/slider/img1.jpg'
import img2 from '../../../images/slider/img2.jpg'
import img3 from '../../../images/slider/img3.jpg'
import { Link } from 'react-router-dom';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    return (
        <div>
            <h1 className="text-center fw-bold my-5">Welcome to KBO Hospital</h1>
            <div className="hight-set">

                <Carousel fade>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-dark fw-bold">
                            <h3>Always Here</h3>
                            <p>Speak with an MSK cancer expert to determine the best and safest options for your care.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className="text-warning fw-bold">
                            <h3>Rigorous. Thoughtful. Safe.</h3>
                            <p>That’s MSK every day, including right now. See how we are delivering world-class cancer care for our patients.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="text-primary fw-bold">
                            <h3>Always Will be</h3>
                            <p>Speak with an MSK cancer expert to determine the best and safest options for your care.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


            <>
                <Container>
                    <div className="card-style my-5 ">

                        <Card className="m-4 active-card-style">
                            <Card.Body>
                                <Card.Title>Find a Doctor</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">SEARCH FOR DOCTORS BY YOUR TYPE:</Card.Subtitle>
                                <Card.Text>
                                    State of the art technology and expertise combined with the support of our friendly staff, we strive each day to be the top healthcare provider, not only in Bangladesh but within the Asia-Pacific region.

                                </Card.Text>
                                <Link to="/consultant"><Button><i className="fas fa-user-md"></i> MEET OUR CONSULTANTS</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card className="m-4 active-card-style">
                            <Card.Body>
                                <Card.Title>Make an Appointment</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">HOW CAN WE HELP?</Card.Subtitle>
                                <Card.Text>
                                    Need to call to verify the payment. Unless payment is made 5-6 hours before telemedicine appointment time, appointment will not be confirmed
                                    Patient can send his/her Investigations prior to TM for doctor assessment to appointment@uhlbd.com

                                </Card.Text>
                                <Link to="/appointment"><Button><i className="fas fa-calendar-check"></i>  Make Appointment</Button></Link>
                            </Card.Body>
                        </Card>

                    </div>
                </Container>

            </>

            <Container>
                <div >
                    <ServicesHome></ServicesHome>
                </div>
            </Container>
        </div>
    );
};

export default Home;