import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import banner1 from '../../Images/banner1.jpg'
import banner2 from '../../Images/banner2.jpg'
import banner3 from '../../Images/banner3.jpg'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Get Cracking Gears</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

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
            <div className='carou'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100  "
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption className='mb-3'>
                            <h1 className=' fs-3 font-mono  underline underline-offset-4  '>
                                COMPLETE ALL YOUR OUTDOOR NEEDS HERE</h1>
                            <p>Traveling well can be one of life's great pleasures, whether you're alone or with family and friends—and this is true now more than ever, after two years of sticking close to home.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100  "
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='fs-3 font-mono  underline underline-offset-4'>PROVIDE ALL YOUR OUTDOOR NEEDS</h3>
                            {/* <hr className='w-50 text-center h-5' /> */}
                            <p>Over the past eight years, we've spent hundreds of hours researching and testing dozens of products to find the most dependable items to help you travel well.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100  "
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className='fs-3 font-mono  underline underline-offset-4'>IMPORT YOUR SUITABLE PRODUCTS</h3>
                            <p>And we relied heavily on Wirecutter staff experiences, since this is an especially mobile group that has worked remotely from every continent</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


        </div>
    );
};

export default Header;