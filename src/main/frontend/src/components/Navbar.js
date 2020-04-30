import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import './Navbar.css';

// const [ selected, setSelected ] = useState("1");
const isSelected = () => {};

const Navbar = () => {
	// Home, Post Lost Item, Search Item, Profile, Sign Out
	const history = useHistory();
	//Function for getting the unique id
	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};
	let query = useQuery();
	const homeButton = () => {
		let uniqueID = query.get('uid');
		if (uniqueID === 'true') history.push(`/admins?uid=${uniqueID}`);
		else history.push(`/users?uid=${uniqueID}`);
	};
	const postButton = () => {
		let uniqueID = query.get('uid');
		if (uniqueID === 'true') history.push(`/itemsUser?uid=${uniqueID}`);
		else history.push(`/itemsUser?uid=${uniqueID}`);
	};
	const signOut = () => {
		history.push('/');
	};

	return (
		<div>
			<nav className='navbar navbar-expand-md  nav-color'>
				<button className='navbar-brand navbarTitle button-color' onClick={homeButton}>
					Lost & Found
				</button>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item active'>
							<button className='nav-link nav-color-text  button-color' onClick={postButton}>
								Post Item
							</button>
						</li>
						<li className='nav-item'>
							<button className='nav-link nav-color-text  button-color' onClick={signOut}>
								Log Out
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
export default Navbar;
