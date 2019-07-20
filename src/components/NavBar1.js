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
				<Nav className="justify-content-end">
					<Nav.Item className="pr-3 pl-3 py-3 px-3">
						<Link to="/skills" style={{ color: '#48e0e8' }}>
							My Skills
						</Link>
					</Nav.Item>

					<Nav.Item className="pr-3 pl-3 py-3 px-3">
						<Link to="/projects" style={{ color: '#48e0e8' }}>
							Projects
						</Link>
					</Nav.Item>
					<Nav.Item className="pr-3 pl-3 py-3 px-3">
						<Link to="/contact" style={{ color: '#48e0e8' }}>
							Contact Me
						</Link>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar1;
