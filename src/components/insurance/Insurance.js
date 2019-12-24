import React from "react";
import { connect } from "react-redux";
import {
	createPolicy,
	claimPolicy,
	deletePolicy
} from "../../actions/insuranceActions";

class Insurance extends React.Component {
	render() {
		console.log(this.props);

		return (
			<div>
				<p>Check console log</p>
				<button
					className="ui button primary"
					onClick={() =>
						this.props.createPolicy("user name", 100)
					}
				>
					create policy
				</button>
				<button
					className="ui button primary"
					onClick={() => this.props.claimPolicy("user name", 50)}
				>
					claim policy
				</button>
				<button
					className="ui button primary"
					onClick={() => this.props.deletePolicy("user name")}
				>
					remove policy
				</button>
			</div>
		);
	}
}

const propsToState = state => {
	// console.log(state)
	return state;
};

export default connect(propsToState, {
	createPolicy,
	claimPolicy,
	deletePolicy
})(Insurance);
