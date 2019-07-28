import React, { Component } from 'react';
import './Projectcard.css';
import Carousel from 'react-bootstrap/Carousel';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-c137.css';

class Projectcard extends Component {
	render() {
		return (
			<div className="contain shadow">
				<div className="title">{this.props.projectname}</div>
				<Carousel>
					<Carousel.Item>
						<img alt="html" src={this.props.src1} className="picture" />
					</Carousel.Item>
					<Carousel.Item>
						<img alt="html" src={this.props.src2} className="picture" />
					</Carousel.Item>
				</Carousel>
				<div className="btncontain">
					<AwesomeButton type="link" size="medium" className="projectbtns">
						More
					</AwesomeButton>
					<AwesomeButton
						type="link"
						href="https://face---recognition.herokuapp.com/"
						target="_blank"
						size="medium"
						className="projectbtns"
					>
						Website
					</AwesomeButton>
					<AwesomeButton
						href="https://github.com/ali-moussavi/Face-Recognition-React"
						target="_blank"
						type="link"
						size="medium"
						className="projectbtns"
					>
						Github
					</AwesomeButton>
				</div>
			</div>
		);
	}
}

export default Projectcard;
