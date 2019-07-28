import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import contactMe from './components/contactMe';
import home from './components/home';
import NavBar1 from './components/NavBar1';
import projects from './components/projects';
import skills from './components/skills';
import './App.css';
import Footer from './components/Footer';
import posed, { PoseGroup } from 'react-pose';

const RouteContainer = posed.div({
	enter: { x: 0, opacity: 1, delay: 300, beforeChildren: true },
	exit: { x: -500, opacity: 0 }
});

class App extends Component {
	render() {
		return (
			<div className="specialfont">
				<BrowserRouter>
					<Route
						render={({ location }) => (
							<div className="specialfont">
								<NavBar1 />
								<PoseGroup>
									<RouteContainer key={location.pathname}>
										<Switch location={location}>
											<Route
												path="/"
												exact
												component={home}
												key="home"
											/>
											<Route
												path="/projects"
												exact
												component={projects}
												key="projects"
											/>
											<Route
												path="/skills"
												exact
												component={skills}
												key="skills"
											/>
											<Route
												path="/contact"
												exact
												component={contactMe}
												key="contact"
											/>
										</Switch>
									</RouteContainer>
								</PoseGroup>
								<Footer />
							</div>
						)}
					/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
