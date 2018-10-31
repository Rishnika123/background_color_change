import React, { Component } from 'react';
class HelloWorld extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'ROSYBROWN',
		};
	}

	changeColor(e) {
		this.setState({
			color: e.target.value,
		});
	}

	render() {
		// console.log(this.state);
		const stylesObj = {
			background: this.state.color,
		};

		return (
			<div id="hello-world" style={stylesObj} className="container">
				<div className="box">
					<h2>Hello, World!</h2>

					<br />
P					<input value={this.state.color} onChange={this.changeColor.bind(this)} />
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			</div>
		);
	}
}

export default HelloWorld;
