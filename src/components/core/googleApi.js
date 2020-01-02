import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions/auth";

class GoogleApi extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"589766257203-tgj0seejuicljgfa85s6po9s3lhpfrlp.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(a => this.onAuthChange(a));
				});
		});
	}

	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			let userId = this.auth.currentUser
				.get()
				.getBasicProfile()
				.getId();

			this.props.signIn(userId);
		} else {
			this.props.signOut();
		}
	};

	renderDom() {
		let isSignedIn = this.props.isSignedIn;

		if (this.props.isSignedIn === null || !this.auth) {
			return <div>Connection in progress</div>;
		} else if (isSignedIn) {
			return (
				<button
					className="ui red mini  button"
					onClick={this.auth.signOut}
				>
					<i className="google icon"></i>
					Sign Out
				</button>
			);
		} else {
			return (
				<button
					className="ui red mini  button"
					onClick={this.auth.signIn}
				>
					<i className="google icon"></i>
					Sign In
				</button>
			);
		}
	}

	render() {
		return this.renderDom();
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {
	signIn,
	signOut
})(GoogleApi);
