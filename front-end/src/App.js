import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Login from './components/Login'
import FourOhFour from './components/FourOhFour'

import './css/App.scss';

function Home() {
	return <h2>Home</h2>;
}

function App() {
	return (
		<Router className="wrapper-container">
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/">Home</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/login" exact={ true }>
						<Login />
					</Route>
					<Route path="/" exact={ true }>
						<Home />
					</Route>
					<Route path='*' exact={ true }>
						<FourOhFour />
					</Route>
				</Switch>
			</div>
		</Router>
  	);
}

export default App;
