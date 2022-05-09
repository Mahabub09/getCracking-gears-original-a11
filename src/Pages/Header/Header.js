import React from 'react'
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user)
    }

    const handleSignOut = () => {
        signOut(auth);
    }
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
                                {
                                    user && <>
                                        <Nav.Link as={Link} to="items" >ITEMS</Nav.Link>
                                        <Nav.Link as={Link} to="myItems" >MY ITEMS</Nav.Link>
                                        <Nav.Link as={Link} to="manageItems" >MANAGE ITEMS</Nav.Link>
                                        <Nav.Link as={Link} to="addItems" >ADD ITEMS</Nav.Link></>
                                }
                                <Nav.Link as={Link} to="aboutMe" >ABOUT ME</Nav.Link>
                                <Nav.Link as={Link} to="blogs" >BLOGS</Nav.Link>

                            </Nav>
                            <Nav>
                                {
                                    user ?
                                        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                        :
                                        <Nav.Link as={Link} to="login">
                                            Login
                                        </Nav.Link>}
                                <img className=' w-10 rounded-full' src={user?.photoURL} alt="" />
                                <Nav.Link >

                                    {user?.displayName}
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