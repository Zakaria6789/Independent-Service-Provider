import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar-container' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img className='nav-img' width='40' src={logo} alt="" />
                    <span className='nav-text'>Patient Aid</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-link">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link href="/home#services">Services</Nav.Link>
                        <Nav.Link href="/home#contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ?
                                <button className='signOut-btn' onClick={() => signOut(auth)}>Sign Out</button> :
                                <Nav.Link as={Link} to="/login"><button className='login-btn'>Log In</button></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;