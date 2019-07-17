import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom';
import 'react-awesome-button/dist/themes/theme-rickiest.css';

class home extends Component {
	render() {
		return (
			<div className="home">
				<Container>
					<Row className>
						<Col className="height30 text-align-center-down ">
							<div className="hello">Hello, my name is </div>
						</Col>
					</Row>
					<Row className>
						<Col className="text-align-center ">
							<div className="myname">Ali Moussavi</div>
						</Col>
					</Row>
					<Row className>
						<Col className=" text-align-center ">
							<div className="hello">I am a</div>
						</Col>
					</Row>
					<Row className>
						<Col className=" text-align-center-up ">
							<div className="myname">Fullstack Web Developer</div>
						</Col>
					</Row>
					<Row className>
						<Col className="text-align-center-up ">
							<Link to="/skills">
								<AwesomeButton type="primary">
									More about me
								</AwesomeButton>
							</Link>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default home;
