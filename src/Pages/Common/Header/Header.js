import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home#home">KBO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" className="text-light">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services" className="text-light">Services</Nav.Link>
                            <Nav.Link as={Link} to="/appointment" className="text-light">Appointment</Nav.Link>
                            <Nav.Link as={Link} to="/consultant" className="text-light">Consultant</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="text-light">Contact</Nav.Link>

                        </Nav>
                        <Nav>
                            <Navbar.Collapse className="justify-content-end ">
                                {
                                    !user.email ?
                                        <Nav.Link as={Link} to="/login" className="text-light">Log in <i className="fas fa-sign-in-alt"></i></Nav.Link> :
                                        < >
                                            <Nav.Link as={Link} to="/home" onClick={logOut} className="text-light"> <i className="fas fa-sign-out-alt"></i> Log Out</Nav.Link>
                                            <Nav.Link as={Link} to="/login" className="text-light"> <i className="fas fa-user-tie"></i> : {user.displayName}</Nav.Link>
                                        </>

                                }
                            </Navbar.Collapse>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;