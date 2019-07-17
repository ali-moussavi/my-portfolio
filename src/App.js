import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import contactMe from './components/contactMe';
import home from './components/home';
import NavBar1 from './components/NavBar1';
import projects from './components/projects';
import skills from './components/skills';
import { Container } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<NavBar1 />
						<Route path="/" exact component={home} />
						<Route path="/projects" exact component={projects} />
						<Route path="/skills" exact component={skills} />
						<Route path="/contact" exact component={contactMe} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
