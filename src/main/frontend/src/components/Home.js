import React from 'react';
import './Home.css';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

const Home = () => {
	return (
		<Router>
                <div className="AppS">
                  <div className="AppS__Aside">
                    <div className="PageSwitcher">
                      <NavLink to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item ">Sign Up</NavLink>

                      <NavLink exact to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item  ">Sign In</NavLink>

                    </div>
                  <img src="https://i.ibb.co/qd1YZDV/lost-found-copy.jpg" alt="lost-found-copy" border="0" className="picturesCss"/>
                    <h3 style={{color:"#3f5474"}}>A Place Where You Can</h3>
                    <ul className="list-group" style={{color:"black"}}>
                        <li className="list-group-item">
                            <h5 className="text">
                                Found Your Item
                            </h5>
                        </li>
                        <li className="list-group-item">
                            <h5 className="text">
                                Post Your Lost Item
                            </h5>
                        </li>
                    </ul>
                  </div>
                  <div className="AppS__Form">
                    <Route path="/sign-up" component={SignUpForm}>
                    </Route>
                    <Route exact path="/sign-in" component={SignInForm}>
                    </Route>
                  </div>
                </div>
              </Router>
	);
};
export default Home;
