import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'
import Typewriter from 'typewriter-effect';




export default class Banner extends Component {


    render() {
        return (
            <div>
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

                </div>
                <div>
                    <header class="header">
                        <div class="header__logo-box ">

                            <div class="header__logo-box-mid">
                                <img src="https://www.wanderon.in/svg/nav/phone.svg" alt="phone" />
                                <h1>+880145456454</h1>
                            </div>

                            <div class="header__logo-box-last d-flex justify-around">
                                <h1>Home</h1>
                                <h1>WORKCATIONS</h1>
                                <h1>BLOGS</h1>
                            </div>
                        </div>

                        <div class="header__text-box">
                            <h1 >
                                COMPLETE ALL YOUR OUTDOOR NEEDS HERE
                            </h1>
                            <p className='mt-10'>
                                <Typewriter
                                    options={{
                                        strings: [' Spreading Happiness', ' Connecting People', " Creating Memories", " Creating Stories", " Fulfilling Adventure"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString()
                                            .callFunction(() => {
                                                console.log('String typed out!');
                                            })
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .callFunction(() => {
                                                console.log('All strings were deleted');
                                            })
                                            .start();
                                    }}
                                />
                            </p>


                            <div className="header__text-box-inputContainer">
                                <input placeholder="Search Whatever You Want" />
                                <div className="header__text-box-inputContainer-imgConatiner">
                                    <img src="https://www.wanderon.in/svg/search.svg" alt="phone" />
                                </div>
                            </div>

                        </div>
                    </header >
                </div>
            </div>
        )
    }
}