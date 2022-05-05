import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/" >Get Cracking Gears</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="home">HOME</Nav.Link>
                                <Nav.Link as={Link} to="items" >ITEMS</Nav.Link>
                                <Nav.Link as={Link} to="myItems" >MY ITEMS</Nav.Link>
                                <Nav.Link as={Link} to="addItems" >ADD ITEMS</Nav.Link>
                                <Nav.Link as={Link} to="aboutMe" >ABOUT ME</Nav.Link>
                                <Nav.Link as={Link} to="blogs" >BLOGS</Nav.Link>

                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">More deets</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        </div>
    );
};

export default Header;