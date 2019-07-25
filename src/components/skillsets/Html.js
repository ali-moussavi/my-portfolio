import React, { Component } from 'react';
import './Html.css';

class Html extends Component {
	render() {
		return (
			<div className="ctr shadow p-3">
				<img alt="html" src={this.props.src} className="icon" />
				<div className="iconname" style={this.props.color}>
					{this.props.text}
				</div>
			</div>
		);
	}
}

export default Html;
