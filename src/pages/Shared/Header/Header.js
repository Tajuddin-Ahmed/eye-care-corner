import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import logo from "../../../images/banner/logo.png"
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" className="header" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home"><img className="rounded-circle" width="40px" height="40px" src={logo} alt="" /> Eye Care</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} variant="light" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Navbar.Text>
                            <a className="text-decoration-none text-uppercase pe-1" href="#login"> {user?.displayName}</a>
                        </Navbar.Text>
                        {
                            user?.email ?
                                <Button className="ms-4 btn btn-dark btn-sm" onClick={logOut}>Logout </Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;