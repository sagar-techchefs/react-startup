import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/blogActions";

class UserHeader extends React.Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}

	render() {
		const userId = this.props.userId;
		const userDetails = this.props.users.find(user => user.id === userId);

		if (!userDetails) {
			return <i>Loading...</i>;
		}

		return <i>- {userDetails.name}</i>;
	}
}

const mapStateToProps = state => {
	return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
