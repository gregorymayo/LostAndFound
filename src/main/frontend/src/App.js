import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import User from './components/User';
import Admin from './components/Admin';
import Item from './components/Item';
import Error from './components/Error';
import SignUpForm from './components/SignUpForm';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<div>
					<Switch>
						<Route path='/' component={Home} exact />
						<Route path='/sign-up' component={SignUpForm} />
						<Route path='/user' component={User} />
						<Route path='/admin' component={Admin} />
						<Route path='/item' component={Item} />
						<Route component={Error} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
