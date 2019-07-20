import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { Spring, config } from 'react-spring/renderprops';

const delay = 5800;

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<Spring
					from={{ marginLeft: -2000 }}
					to={{ marginLeft: 0 }}
					className="myiconholder1"
					config={config.slow}
					delay={delay}
				>
					{(props) => (
						<div style={props} className="myiconholder1">
							<div className="myiconholder">
								<a href="https://www.linkedin.com/in/ali-moussavi-1368b1172/">
									<img
										alt="linkedin"
										src="/linkedin.PNG"
										className="myicon linkedin"
									/>
								</a>
							</div>
						</div>
					)}
				</Spring>
				<Spring
					from={{ opacity: 0 }}
					to={{ opacity: 1 }}
					className="myiconholder1"
				>
					{(props) => (
						<div style={props} className="myiconholder1">
							<div className="myiconholder1">
								<a href="https://github.com/ali-moussavi">
									<img
										alt="github"
										src="/github.PNG"
										className="github"
									/>
								</a>
							</div>
						</div>
					)}
				</Spring>
				<Spring
					from={{ opacity: 0 }}
					to={{ opacity: 1 }}
					className="myiconholder1"
				>
					{(props) => (
						<div style={props} className="myiconholder1">
							<div className="myiconholder">
								<a href="https://t.me/MohammadAli_73">
									<img
										alt="telegram"
										src="/telegram.PNG"
										className="myicon telegram"
									/>
								</a>
							</div>
						</div>
					)}
				</Spring>
				<Spring
					from={{ opacity: 0 }}
					to={{ opacity: 1 }}
					className="myiconholder1"
				>
					{(props) => (
						<div style={props} className="myiconholder1">
							<div className="myiconholder">
								<a href="https://www.instagram.com/mohammadali73/">
									<img
										alt="instagram"
										src="/instagram.PNG"
										className="myicon instagram"
									/>
								</a>
							</div>
						</div>
					)}
				</Spring>
			</div>
		);
	}
}

export default Footer;