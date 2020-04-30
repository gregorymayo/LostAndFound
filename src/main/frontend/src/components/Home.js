import React, { useState } from 'react';
import './Home.css';
import './SignInForm.css';
import { httpTemplate } from './HttpTemplate';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const history = useHistory();
	const goToSignUp = e => {
		e.preventDefault();
		history.push('/sign-up');
	};
	const goToSignIn = e => {
		e.preventDefault();
		history.push('/');
	};
	const handleChangeEmail = event => {
		event.preventDefault();
		//console.log(event.target.value);
		setEmail(event.target.value);
	};
	const handleChangePassword = event => {
		event.preventDefault();
		//console.log(event.target.value);
		setPassword(event.target.value);
	};
	//Handling the submit button
	const onLogin = async e => {
		e.preventDefault();
		//console.log(email);
		//console.log(password);
		//Post to DB
		const response = await fetch('http://localhost:8080/user/login', {
			method: 'POST',
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
			body: JSON.stringify({ userEmail: email, password: password })
		});
		const responseData = await response.json();
		//console.log(responseData.status);
		if (responseData.status !== 500) {
			if (responseData.result.userIsAdmin) history.push(`/admins?uid=${responseData.result.userIsAdmin}`);
			else history.push(`/users?uid=${responseData.result.userIsAdmin}`);
		}
	};
	return (
		<div>
			<div className='AppS'>
				<div className='AppS__Aside'>
					<div className='PageSwitcher'>
						<button className='PageSwitcher__Item ' onClick={goToSignUp}>
							Sign Up
						</button>
						<button className='PageSwitcher__Item ' onClick={goToSignIn}>
							Sign In
						</button>
					</div>
					<img
						src='https://i.ibb.co/qd1YZDV/lost-found-copy.jpg'
						alt='lost-found-copy'
						border='0'
						className='picturesCss'
					/>
					<h3 className='title' style={{ color: '#3f5474' }}>
						A Place Where You Can
					</h3>
					<ul className='list-group' style={{ color: 'black' }}>
						<li className=''>
							<h5 className='text'>Found Your Item</h5>
						</li>
						<li className=''>
							<h5 className='text'>Post Your Lost Item</h5>
						</li>
					</ul>
				</div>

				<div className='AppS__Form'>
					<div className='Box'>
						<div className='FormField'>
							<div className='FormField'>
								<label className='FormField__Label' htmlFor='name'>
									Email
								</label>
								<input
									className='FormField__Input'
									placeholder='Enter Your Email'
									onChange={event => handleChangeEmail(event)}
									value={email}
								/>
							</div>
							<div className='FormField'>
								<label className='FormField__Label' htmlFor='pass'>
									Password
								</label>
								<input
									type='password'
									className='FormField__Input'
									placeholder='Enter Your Password'
									onChange={event => handleChangePassword(event)}
									value={password}
								/>
							</div>
							<div className='FormField'>
								<button className='FormField__Button' onClick={onLogin}>
									Sign In
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
