import React, { Component } from 'react';
import './skills.css';
import Html from './skillsets/Html';

class skills extends Component {
	render() {
		return (
			<div className="myskills">
				<Html src="/html-5.png" color={{ color: '#fc490b' }} text="HTML5" />
				<Html src="/css.png" color={{ color: '#039be5' }} text="CSS3" />
				<Html
					src="/javascript.png"
					color={{ color: '#d4b830' }}
					text="JavaScript"
				/>
				<Html src="/reactjs.png" color={{ color: '#6fcff0' }} text="React" />
				<Html src="/Redux.png" color={{ color: '#8965c1' }} text="Redux" />
				<Html
					src="/bootstrap.png"
					color={{ color: '#8854d6' }}
					text="Bootstrap"
				/>
				<Html src="/nodejs.png" color={{ color: '#6da75d' }} text="Node.js" />
				<Html src="/github1.png" color={{ color: '#ffffff' }} text="GitHub" />
			</div>
		);
	}
}

export default skills;
