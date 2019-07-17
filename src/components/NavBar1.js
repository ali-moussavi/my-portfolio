import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar1.css';

const NavBar1 = () => {
	return (
		<Navbar sticky="top" expand="lg" bg="dark" variant="dark">
			<Navbar.Brand className="nopadding">
				<Link to="/">
					<img
						alt=""
						src="/Capture.PNG"
						width="180"
						height="50"
						className="d-inline-block align-top"
					/>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse className="justify-content-end">
				<Nav>
					<Nav.Link>
						<Link to="/skills">My Skills</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/projects">Projects</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/contact">Contact Me</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar1;
