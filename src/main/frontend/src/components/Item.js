import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import './Item.css';

const ItemsUser = () => {
	const [ itemName, setItemName ] = useState('');
	const [ itemDesc, setItemDesc ] = useState('');
	const [ itemImg, setItemImg ] = useState(' https://i.ibb.co/k1FKC1D/28xp-lost-article-Large.jpg');
	const history = useHistory();
	const handleChange = e => {
		e.preventDefault();
		if (e.target.id === 'itemName') setItemName(e.target.value);
		if (e.target.id === 'itemDesc') setItemDesc(e.target.value);
		if (e.target.id === 'imageUpload') setItemImg(e.target.value);
		// if(e.target.id === "itemName")
		// 	setItemName(e.target.value);
	};
	//Function for getting the unique id
	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};
	let query = useQuery();

	const onSubmit = async e => {
		e.preventDefault();
		/*
		console.log(itemName);
		console.log(itemDesc);
		console.log(itemImg);
		*/
		if (itemName !== '' && itemDesc !== '' && itemImg !== '') {
			let uniqueID = query.get('uid');
			//console.log(uniqueID);
			const timestamp = Date.now(); // This would be the timestamp you want to format
			const timeLost = new Intl.DateTimeFormat('en-US', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			}).format(timestamp);
			//Post to DB
			const response = await fetch('http://localhost:8080/api/item', {
				method: 'POST',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
				body: JSON.stringify({
					itemName: itemName,
					itemDescription: itemDesc,
					itemPicture: itemImg
					//,dateLost: timeLost
				})
			});
			const responseData = await response.json();
			//console.log(responseData);
			if (uniqueID === 'true') history.push(`/admins?uid=${uniqueID}`);
			else history.push(`/users?uid=${uniqueID}`);
		}
	};

	return (
		<div>
			<Navbar />
			<div className='item-container'>
				<div className='item-img-container'>
					<img src={itemImg} className='rounded float-left img-lost' alt='items.jpg' />
				</div>
				<div className='item-form'>
					<form>
						<div className='form-group'>
							<label>Item Name</label>
							<input
								type='text'
								className='form-control'
								id='itemName'
								placeholder='Enter item name'
								onChange={event => handleChange(event)}
								value={itemName}
							/>
						</div>
						<div className='form-group'>
							<label>Item Description</label>
							<textarea
								className='form-control'
								id='itemDesc'
								rows='3'
								placeholder='Describe the color, size, etc.'
								onChange={event => handleChange(event)}
								value={itemDesc}
							/>
						</div>
						<div className='form-group'>
							<label>Upload Image</label>
							<input
								type='text'
								className='form-control-file'
								id='imageUpload'
								onChange={event => handleChange(event)}
							/>
							<p>For example: https://i.ibb.co/k1FKC1D/28xp-lost-article-Large.jpg</p>
						</div>
						<button className='item-btn-submit' onClick={onSubmit}>
							Post Item
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default ItemsUser;
