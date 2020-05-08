import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignUpForm.css';

const SignUpForm = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ admin, setAdmin ] = useState(false);
	const history = useHistory();
	const goToSignUp = e => {
		e.preventDefault();
		history.push('/sign-up');
	};
	const goToSignIn = e => {
		e.preventDefault();
		history.push('/');
	};
	const handleChangeName = event => {
		event.preventDefault();
		//console.log(event.target.value);
		setName(event.target.value);
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
	const handleChangeAdmin = event => {
		event.preventDefault();
		//console.log(event.target.value);
		setAdmin(true);
	};
	//Handling the submit button
	const createAccount = async e => {
		e.preventDefault();
		/*
		console.log(name);
		console.log(email);
		console.log(password);
		console.log(admin);
		*/
		if (name !== '' && email !== '' && password !== '') {
			//Post to DB
			const response = await fetch('https://lost-and-found-backend.herokuapp.com/user', {
				method: 'POST',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
				body: JSON.stringify({ userFullname: name, password: password, userEmail: email, userIsAdmin: admin })
			});
			const resData = await response.json();
			//console.log(resData);
			if (resData.status != 500) {
				if (resData.result.userIsAdmin) history.push(`/admins?uid=${resData.result.userIsAdmin}`);
				else history.push(`/users?uid=${resData.result.userIsAdmin}`);
			}
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
					<div className='FormCenter'>
						<div className='BoxSignUp'>
							<div className='FormField'>
								<div className='FormField'>
									<label className='FormField__Label' htmlFor='name'>
										Full Name
									</label>
									<input
										className='FormField__Input'
										placeholder='Enter Your Full Name'
										onChange={event => handleChangeName(event)}
										value={name}
									/>
								</div>
								<div className='FormField'>
									<label className='FormField__Label' htmlFor='email'>
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
									<label className='FormField__Label' htmlFor='password'>
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
								<label className='FormField__CheckboxLabel'>
									<input
										className='FormField__Checkbox'
										type='checkbox'
										name='agree'
										onChange={event => handleChangeAdmin(event)}
										value={admin}
									/>{' '}
									Admin
									<div className='FormField'>
										<button className='FormField__Button' onClick={createAccount}>
											Sign Up
										</button>
									</div>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default SignUpForm;
