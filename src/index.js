import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import {
	Route,
	Link,
	BrowserRouter as Router,
	Switch,
	NavLink
} from "react-router-dom";

// imports for redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import Users from "./components/Users";
import Contacts from "./components/Contacts";
import notFound from "./components/notFound";
import Comments from "./components/comments/Comments";
import Seasons from "./components/seasons/Seasons";
import ImangeSearch from "./components/imangeSearch/ImangeSearch";
import SongsList from "./components/songs/SongsList";
import Insurance from "./components/insurance/Insurance";
import Blog from "./components/blog/Blog";

const routing = (
	<Router>
		<div>
			<div className="ui pointing menu">
				<NavLink
					className="item"
					exact
					to="/"
					activeClassName="active"
				>
					Home
				</NavLink>
				<NavLink
					className="item"
					to="/users"
					activeClassName="active"
				>
					Users
				</NavLink>
				<Link className="item" to="/contacts">
					Contacts
				</Link>
				<NavLink
					className="item"
					to="/comments"
					activeClassName="active"
				>
					Comments
				</NavLink>
				<NavLink
					className="item"
					to="/seasons"
					activeClassName="active"
				>
					Seasons
				</NavLink>
				<NavLink
					className="item"
					to="/cars"
					activeClassName="active"
				>
					Cars
				</NavLink>
				<NavLink
					className="item"
					to="/songsList"
					activeClassName="active"
				>
					Songs
				</NavLink>
				<NavLink
					className="item"
					to="/blog"
					activeClassName="active"
				>
					Blog
				</NavLink>
				<NavLink
					className="item"
					to="/insurance"
					activeClassName="active"
				>
					Insurance
				</NavLink>

				{/* <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/users" activeClassName="active">Users</NavLink>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <NavLink to="/comments" activeClassName="active">Comments</NavLink>
                </li>
                <li>
                    <NavLink to="/seasons" activeClassName="active">Seasons</NavLink>
                </li>
            </ul> */}
			</div>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/users" component={Users} />
				<Route path="/users/:id" component={Users} />
				<Route path="/contacts" component={Contacts} />
				<Route path="/comments" component={Comments} />
				<Route path="/seasons" component={Seasons} />
				<Route path="/cars" component={ImangeSearch} />
				<Route path="/songsList" component={SongsList} />
				<Route path="/insurance" component={Insurance} />
				<Route path="/blog" component={Blog} />
				<Route component={notFound} />
			</Switch>
		</div>
	</Router>
);

// # add routing to the react app
// ReactDOM.render(routing, document.getElementById('root'));

const store = createStore(reducers, applyMiddleware(thunk));

// use redux
ReactDOM.render(
	<Provider store={store}> {routing} </Provider>,
	document.getElementById("root")
);
// ReactDOM.render(<Provider store={createStore(reducers)}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
