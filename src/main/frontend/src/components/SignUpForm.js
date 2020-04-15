import React, {useState} from 'react';
import './SignUpForm.css';
const SignUpForm = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ admin, setAdmin ] = useState(false);
    const handleChangeName = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        setName(event.target.value);
    };
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
    const handleChangeAdmin = (event) => {
            event.preventDefault();
            console.log(event.target.value);
            setAdmin(true);
        };
    //Handling the submit button
    const createAccount = () => {
        //e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(admin);
        	/*
        	const response = await fetch(databaseURL, {
        			method: 'POST',
        			headers: {
        				'Content-Type': 'application/json'
        			},
        			body: JSON.stringify({
        				question: question,
        				answers: values
        			})
        		});
        		const resData = await response.json();
        		//Outputing unique key from Firebase
        		*/
    };

	return (
		                <div className="FormCenter">
                            <div className="BoxSignUp">
                            <div className="FormField" >
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="name">Full Name</label>
                                    <input className="FormField__Input" placeholder="Enter Your Full Name" onChange={event => handleChangeName(event)} value={name}></input>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="email">Email</label>
                                    <input className="FormField__Input" placeholder="Enter Your Email" onChange={event => handleChangeEmail(event)} value={email}></input>
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="password">Password</label>
                                    <input type="password" className="FormField__Input" placeholder="Enter Your Password" onChange={event => handleChangePassword(event)} value={password} ></input>
                                </div>
                                <label className="FormField__CheckboxLabel">
                                    <input className="FormField__Checkbox" type="checkbox" name="agree" onChange={event => handleChangeAdmin(event)} value={admin}/> Admin
                                    <div className="FormField">
                                        <button className="FormField__Button" onClick={createAccount}>Sign Up</button>
                                    </div>
                                </label>
                            </div>
                            </div>
                        </div>

	);
};
export default SignUpForm;