import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './home.css';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom';
import 'react-awesome-button/dist/themes/theme-rickiest.css';
import { Spring, Transition, Trail, config } from 'react-spring/renderprops';

const myname = [ 'A', 'l', 'i' ];
const mylastname = [ 'M', 'o', 'u', 's', 's', 'a', 'v', 'i' ];
const fullstack = [ 'F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k' ];
const developer = [ 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r' ];

class home extends Component {
	render() {
		return (
			<div className="home">
				<Container>
					<Row>
						<Col className="height30 text-align-center-down ">
							<Spring
								from={{ marginLeft: -2000 }}
								to={{ marginLeft: 0 }}
								config={config.gentle}
							>
								{(props) => (
									<div style={props}>
										<div className="hello coloring">
											Hello, my name is
										</div>
									</div>
								)}
							</Spring>
						</Col>
					</Row>
					<Row className>
						<Col className="text-align-center ">
							<div className="myname coloring inline">
								<div className="padding-right inline">
									<Trail
										items={myname}
										keys={myname.map((_, i) => i)}
										from={{ transform: 'translate3d(0,-400px,0)' }}
										to={{ transform: 'translate3d(0,0px,0)' }}
										delay={700}
									>
										{(item) => (props) => (
											<div className="letters" style={props}>
												{item}
											</div>
										)}
									</Trail>
								</div>
								<div className="inline">
									<Trail
										items={mylastname}
										keys={mylastname.map((_, i) => i)}
										from={{ transform: 'translate3d(0,-400px,0)' }}
										to={{ transform: 'translate3d(0,0px,0)' }}
										delay={1400}
									>
										{(item) => (props) => (
											<div className="letters" style={props}>
												{item}
											</div>
										)}
									</Trail>
								</div>
							</div>
						</Col>
					</Row>
					<Row className>
						<Col className=" text-align-center ">
							<Spring
								from={{ marginLeft: 2000 }}
								to={{ marginLeft: 0 }}
								config={config.gentle}
								delay={3000}
							>
								{(props) => (
									<div style={props}>
										<div className="hello coloring">I am a</div>
									</div>
								)}
							</Spring>
						</Col>
					</Row>
					<Row className>
						<Col className=" text-align-center-up ">
							<div className="myname coloring inline">
								<div className="padding-right inline">
									<Trail
										items={fullstack}
										keys={fullstack.map((_, i) => i)}
										from={{ transform: 'translate3d(0,-500px,0)' }}
										to={{ transform: 'translate3d(0,0px,0)' }}
										delay={3800}
									>
										{(item) => (props) => (
											<div className="letters" style={props}>
												{item}
											</div>
										)}
									</Trail>
								</div>
								<div className="inline">
									<Trail
										items={developer}
										keys={developer.map((_, i) => i)}
										from={{ transform: 'translate3d(0,-600px,0)' }}
										to={{ transform: 'translate3d(0,0px,0)' }}
										delay={4800}
									>
										{(item) => (props) => (
											<div className="letters" style={props}>
												{item}
											</div>
										)}
									</Trail>
								</div>
							</div>
						</Col>
					</Row>
					<Row className>
						<Col className="text-align-center height5">
							<Link to="/skills">
								<Spring
									from={{ opacity: 0 }}
									to={{ opacity: 1 }}
									config={config.slow}
									delay={5800}
								>
									{(props) => (
										<div style={props}>
											<AwesomeButton type="primary">
												My Skills >
											</AwesomeButton>
										</div>
									)}
								</Spring>
							</Link>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default home;
