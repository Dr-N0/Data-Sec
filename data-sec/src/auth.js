import React, { Component } from 'react'
import Login from './components/login/login.js'
import Home from './components/home/home.js'
import { Button } from "react-bootstrap";

class Auth extends Component { 
	constructor(props) {
		super(props);

		this.state = { 
			auth: false,
			username: ''
		};
		this.changePage = this.changePage.bind(this) 
		this.updateUsername = this.updateUsername.bind(this)
	} 

	changePage(){ 
		let alt = this.state.auth
		this.setState({auth: !alt})
	} 

	updateUsername(name) {
		this.setState({
			username: name
		})
	}

	render() {
		const auth = this.state.auth;
		let page;
		if (auth) {
			page = <Home username={this.state.username}/>
		} else {
			page = <Login submit={this.changePage} updateUsername={this.updateUsername}/>
		}

		return (
			<div className="page-container">
				{page}
				<Button onClick={this.changePage}>Change Page (TESTING)</Button>
			</div>
	    );
	}
}

export default Auth;
