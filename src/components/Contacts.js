import React from 'react';
import { Route, Link } from 'react-router-dom';

const User = ({ match }) => (
	<p>
		Contact id is: {match.params.id} => {match.params.data}
	</p>
);

class Contacts extends React.Component {
	render() {
		// const { url } = this.props.match
		const extraProps = { color: 'red' };

		const url = this.props.match.url;

		return (
			<div>
				<h1>Contacts Component</h1>
				<strong>Get contact details</strong>
				<ul>
					<li>
						<Link to={`${url}/1`}> Contact 1</Link>
					</li>
					<li>
						<Link to={`${url}/2`}> Contact 2</Link>
					</li>
					<li>
						<Link to={`${url}/3`}> Contact 3</Link>
					</li>
				</ul>
				<Route
					path="/contacts/:id"
					component={User}
					render={(props) => <User {...props} data={extraProps} />}
				/>
			</div>
		);
	}
}

export default Contacts;
