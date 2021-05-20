import React from 'react';

export default class MainContainer extends React.Component {
	state = {
		title: 'This is the Title',
        showTitle: true,
        buttonText: 'Hide'
	};

	render() {
		return (
			<div id='title'>
				<div>
					<h1>{this.state.title}</h1>
					<input placeholder='Change the title' />
				</div>
				<button>{this.state.buttonText}</button>
			</div>
		);
	}
}
