import React, { useState, useEffect, Fragment } from 'react';
import Navbar from './Navbar';
import './Admin.css';
import { useHistory } from 'react-router-dom';

const Admins = () => {
	const [ answers, setAnswers ] = useState([
		{ itemId: '', itemName: '', itemDescription: '', itemPicture: '', dateLost: '', dateFound: '' }
	]);

	//Calling the database
	const getData = async () => {
		//GET Method
		const res = await fetch('http://localhost:8080/api/items');
		const resData = await res.json();
		//console.log(resData);
		setAnswers(resData);
	};
	/*
	useEffect(() => {
		getData();
	}, []);
	*/
	getData();
	//Calling the database
	const foundItem = async (itemId, e) => {
		e.preventDefault();
		const timestamp = Date.now(); // This would be the timestamp you want to format
		const timeFound = new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		}).format(timestamp);
		//Post to DB
		const url = `http://localhost:8080/api/item/${itemId}`;
		const response = await fetch(url, {
			method: 'POST',
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
		});
		const resDataFound = await response.json();
		//console.log(resDataFound);
	};

	//Calling the database
	const deleteItem = async (itemId, e) => {
		e.preventDefault();
		//Post to DB
		const response = await fetch(`http://localhost:8080/api/item/${itemId}`, {
			method: 'DELETE',
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
		});
		const resData = await response.json();
		console.log(resData);
	};
	return (
		<div>
			<Navbar />
			{answers.map((inputField, index) => (
				<Fragment key={index}>
					<div className='row'>
						<div className='column'>
							<img
								src={inputField.itemPicture}
								className='rounded float-left img-lost-item'
								alt='items.jpg'
							/>
						</div>
						<div className='column'>
							<h2 className='text-size '>Date Lost:</h2>
							<p>{inputField.dateLost}</p>
							<h2 className='text-size '>Date Found:</h2>
							<p>{inputField.dateFound}</p>
							<h2 className='text-size '>Item Description:</h2>
							<p>{inputField.itemDescription}</p>
						</div>
						<div className='column-button-found'>
							<button className='item-btn-submit' onClick={event => foundItem(inputField.itemId, event)}>
								Found Item
							</button>
						</div>
						<div className='column-button-lost'>
							<button className='item-btn-submit' onClick={event => deleteItem(inputField.itemId, event)}>
								Delete Item
							</button>
						</div>
					</div>
					<hr />
				</Fragment>
			))}
			<div className='layout' />
		</div>
	);
};
export default Admins;
