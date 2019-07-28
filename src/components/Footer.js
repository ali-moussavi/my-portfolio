import React, { Component } from 'react';
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
										src="/linkedin.png"
										className="myicon"
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
								<a href="https://github.com/ali-moussavi">
									<img
										alt="github"
										src="/github.svg"
										className="myicon"
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
										src="/telegram1.png"
										className="myicon"
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
										src="/instagram.png"
										className="myicon"
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
