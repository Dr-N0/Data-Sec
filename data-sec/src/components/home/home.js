import React, { Component } from 'react'
import SearchBar from "../SearchBar/searchbar.js";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: "",
			searchBy: "Search By",
			result: [],
			user: "",
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleResult = this.handleResult.bind(this);
	}

	componentDidMount() {
		if(this.state.user == "") {
			this.setState({user: this.props.u})
		}
	}

	handleSubmit(event) {
		alert("Searched!")
		event.preventDefault();
	}

	handleResult(val) {
		this.setState({ searchValue: val });
	}

	render() {

		return (
			<div className="home-container">
				<SearchBar
					name="Query:"
					placeholder={"Ex: MONGO DB QUERY"}
					submit={this.handleSubmit}
					result={this.handleResult}
				/>
			</div>
		);
	}
}

export default Home;
