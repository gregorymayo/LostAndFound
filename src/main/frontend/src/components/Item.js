import React, { useState } from 'react';
import Navbar from './Navbar';
import './Item.css';

const ItemsUser = () => {
	const [ itemName, setItemName ] = useState('');
	const [ itemDesc, setItemDesc ] = useState('');
	const [ itemImg, setItemImg ] = useState(
		'https://securecdn.pymnts.com/wp-content/uploads/2019/09/Tile-Google-Assistant-Integration.jpg'
	);

	const handleChange = e => {
		e.preventDefault();
		if (e.target.id === 'itemName') setItemName(e.target.value);
		if (e.target.id === 'itemDesc') setItemDesc(e.target.value);
		if (e.target.id === 'imageUpload') setItemImg(URL.createObjectURL(e.target.files[0]));
		// if(e.target.id === "itemName")
		// 	setItemName(e.target.value);
	};

	const onSubmit = async e => {
		e.preventDefault();
		/*
		console.log(itemName);
		console.log(itemDesc);
		console.log(itemImg);
		*/

		//Post to DB
		const response = await fetch('/item', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ itemName: itemName, itemDescription: itemDesc, itemImg })
		});
		const responseData = await response.json();
		console.log(responseData);
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
								type='file'
								className='form-control-file'
								id='imageUpload'
								onChange={event => handleChange(event)}
							/>
							<p>Only upload .JPEG, .JPG, .PNG type file</p>
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
