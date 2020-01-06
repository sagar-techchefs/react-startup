import React from "react";
import {
	Route,
	Link,
	BrowserRouter as Router,
	Switch,
	NavLink
} from "react-router-dom";

import Users from "../Users";
import Contacts from "../Contacts";
import notFound from "../notFound";
import Comments from "../comments/Comments";
import Seasons from "../seasons/Seasons";
import ImageSearch from "../imageSearch/ImageSearch";
import SongsList from "../songs/SongsList";
import Insurance from "../insurance/Insurance";
import Blog from "../blog/Blog";
import GoogleApi from "./googleApi";
import StreamsList from "../streams/StreamsList";
import CreateStream from "../streams/CreateStream";
import Language from "../language/Language";
import Todo from "../todo/Todo";

class Menu extends React.Component {
	renderMenu() {
		return (
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
							to="/streamsList"
							activeClassName="active"
						>
							Streams
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
							to="/todo"
							activeClassName="active"
						>
							Todos
						</NavLink>
						<NavLink
							className="item"
							to="/language"
							activeClassName="active"
						>
							Language
						</NavLink>
						<NavLink
							className="item"
							to="/insurance"
							activeClassName="active"
						>
							Insurance
						</NavLink>
						<NavLink
							className="item"
							to="/comments"
							activeClassName="active"
						>
							Comments
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
							to="/seasons"
							activeClassName="active"
						>
							Seasons
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

						<GoogleApi />

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
						<Route exact path="/" component={ImageSearch} />
						<Route exact path="/users" component={Users} />
						<Route path="/users/:id" component={Users} />
						<Route path="/contacts" component={Contacts} />
						<Route path="/comments" component={Comments} />
						<Route path="/seasons" component={Seasons} />
						<Route
							path="/imageSearch"
							component={ImageSearch}
						/>
						<Route path="/songsList" component={SongsList} />
						<Route path="/insurance" component={Insurance} />
						<Route path="/blog" component={Blog} />
						<Route path="/language" component={Language} />

						<Route
							path="/streamsList"
							exact
							component={StreamsList}
						/>
						<Route
							path="/streams/create"
							component={CreateStream}
						/>
						<Route
							path="/streams/edit/:id"
							component={CreateStream}
						/>
						<Route
							path="/todo"
							component={Todo}
						/>

						{/* <Streams exact>
							<Route
								component={(match) => (
									<div>
										<Route path="/streams/create" component={CreateStream} />
									</div>
								)}
							/>
						</Streams> */}
						<Route component={notFound} />
					</Switch>
				</div>
			</Router>
		);
	}

	render() {
		return this.renderMenu();
	}
}

export default Menu;
