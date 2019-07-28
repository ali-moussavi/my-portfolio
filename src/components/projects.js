import React, { Component } from 'react';
import './projects.css';
import Projectcard from './Projectcard';

class projects extends Component {
	render() {
		return (
			<div className="myprojects">
				<Projectcard
					src1="/project-pics/project1-1.png"
					src2="/project-pics/project1-2.png"
					projectname="Face Recognition App"
				/>
				<Projectcard projectname="Streamer" />
			</div>
		);
	}
}

export default projects;
