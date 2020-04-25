import React from 'react';
import './Navbar.css';

// const [ selected, setSelected ] = useState("1");
const isSelected = () => {
  
};

const Navbar = () => {
    // Home, Post Lost Item, Search Item, Profile, Sign Out
    
	return (
		<div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand navbarTitle" href="/">Lost&Found</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className= "nav-item active">
                                <a id="1" className="nav-link" href="/item">Post Item </a>
                            </li>
                            <li className="nav-item">
                                <a id="2" className="nav-link" href="/profile">List Items</a>
                            </li>
                            <li className="nav-item">
                                <a id="3" className="nav-link" href="/logOut">Log Out</a>
                            </li>
                        </ul>
                </div>
            </nav>
		</div>
	);
};
export default Navbar;
