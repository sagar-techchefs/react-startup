import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/blogActions";

class UserHeader extends React.Component {
	componentDidMount() {
		// this.props.fetchUser(this.props.userId);
	}

	render() {
		const userDetails = this.props.user;
		if (!userDetails) {
			return <i>Loading...</i>;
		}

		return <i>- {userDetails.name}</i>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
