import React, { useState, useEffect, Fragment } from 'react';
import Navbar from './Navbar';
import './User.css';
import { useHistory } from 'react-router-dom';
const Users = () => {
	const [ itemImg, setItemImg ] = useState();
	const [ itemName, setItemName ] = useState('Keys');
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
		var newTimeFound = timeFound.replace('/', '-');
		var newTimeFounds = newTimeFound.replace('/', '-');
		//console.log(newTimeFounds);
		//Post to DB
		const url = `http://localhost:8080/api/item/${itemId}/${newTimeFounds}`;
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
		});
		//const resDataFound = await response.json();
		//console.log(resDataFound);
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
							<h2 className='text-size '>Item Description:</h2>
							<p>{inputField.itemDescription}</p>
							<h2 className='text-size '>Date Lost:</h2>
							<p>{inputField.dateLost}</p>
							<h2 className='text-size '>Date Found:</h2>
							<p>{inputField.dateFound}</p>
						</div>
						<div className='column-button-found'>
							<button className='item-btn-submit' onClick={event => foundItem(inputField.itemId, event)}>
								Found Item
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
export default Users;
