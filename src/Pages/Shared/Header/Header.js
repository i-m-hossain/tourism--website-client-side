import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Happy events</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {
                        user.email && <Nav className="ms-auto">
                            

                            <NavDropdown title={user?.displayName} id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/my-orders">My Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/manage-orders">Manage All Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/services/add">Add A New Service</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    }
                    <Nav>
                        {
                            !user.email ?
                                <Nav.Link href="/login">Login</Nav.Link> :
                                <Nav.Link onClick={logout}>Logout</Nav.Link>

                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;