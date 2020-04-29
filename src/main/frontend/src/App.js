import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Users from './components/User';
import Admins from './components/Admin';
import ItemsUser from './components/Item';
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
						<Route path='/users' component={Users} />
						<Route path='/admins' component={Admins} />
						<Route path='/itemsUser' component={ItemsUser} />
						<Route component={Error} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
