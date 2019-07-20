import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import contactMe from './components/contactMe';
import home from './components/home';
import NavBar1 from './components/NavBar1';
import projects from './components/projects';
import skills from './components/skills';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div className="specialfont">
				<BrowserRouter>
					<div className="specialfont">
						<NavBar1 />
						<Route path="/" exact component={home} />
						<Route path="/projects" exact component={projects} />
						<Route path="/skills" exact component={skills} />
						<Route path="/contact" exact component={contactMe} />
					</div>
					<Footer />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
