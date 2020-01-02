import React from "react";

class Users extends React.Component {
	onSubmit = () => {
		this.props.history.push("/contacts");
	};

	render() {
		const { params } = this.props.match;
		return (
			<div>
				<h1>Users Component</h1>
				<p>User id: {params.id}</p>

				<hr></hr>
				<form>
					<input type="text" />
					<input
						type="button"
						value="Add Contact"
						onClick={this.onSubmit}
					/>
				</form>
			</div>
		);
	}
}

export default Users;
