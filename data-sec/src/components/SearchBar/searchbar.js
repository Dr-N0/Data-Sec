import React, { Component, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './searchbar.css';

export default function SearchBar({ submit, placeholder, name, result }) {
	const [search, setSearch] = useState("");

    function handleSubmit(event) {
		// Where we interface with sql
		event.preventDefault();
	}

	function handleChange(event) {
		setSearch(event.target.value)
		result(event.target.value);
	}

	return(
		<div className="searchbar-container">
			<Form onSubmit={handleSubmit} className="SearchBar">
				<Form.Group size="lg" controlId="text" className="bar">
					<Form.Label>{name}</Form.Label>
					<Form.Control
						type="text"
						value={search}
						onChange={handleChange}
						placeholder={placeholder}
					/>
				</Form.Group>
				<Button className="search-button" block="true" size="lg" type="submit" onClick={submit}>
					Search
				</Button>
			</Form>
		</div>
	);
}