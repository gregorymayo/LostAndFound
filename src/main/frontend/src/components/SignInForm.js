import React, {useState} from 'react';
import './SignInForm.css';
const SignInForm = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const handleChangeEmail = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
            event.preventDefault();
            console.log(event.target.value);
            setPassword(event.target.value);
    };
    //Handling the submit button
    const onLogin = () => {
    	//e.preventDefault();
    	console.log(email);
    	console.log(password);
    	/*
    	//Fetch from Firebase DB and initialize state
        const poll = await fetch(`https://ez-poll.firebaseio.com/qna/${uniqueID}.json`);
        const pollJSON = await poll.json();
    	*/
    };

	return (
		<div className="Box">
                        <div className="FormField" >
                          <div className="FormField">
                            <label className="FormField__Label" htmlFor="name">Email</label>
                            <input className="FormField__Input" placeholder="Enter Your Email" onChange={event => handleChangeEmail(event)} value={email}></input>
                          </div>
                          <div className="FormField">
                            <label className="FormField__Label" htmlFor="pass">Password</label>
                            <input type="password" className="FormField__Input" placeholder="Enter Your Password" onChange={event => handleChangePassword(event)} value={password}></input>
                          </div>
                          <div className="FormField">
                            <button className="FormField__Button" onClick={onLogin}>Sign In</button>
                          </div>
                        </div>
                    </div>
	);
};
export default SignInForm;