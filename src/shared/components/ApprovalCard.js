import React from "react";

class ApprovalCard extends React.Component {
	render() {
		return (
			<div className="ui cards" style={{ margin: "auto" }}>
				<div className="ui card">
					<div className="content">
						{/* if data is sent as a property then access using props */}
						{this.props.content}

						{/* if data is sent as a children the access as children property of props */}
						{this.props.children}

						{this.props.checkInput ? (
							<div>
								<input
									type="text"
									onChange={this.props.checkInput}
								/>
								<br />
								<i>check console log for typed input</i>
							</div>
						) : (
							""
						)}
					</div>
					<div className="extra content">
						<i>check console log for action callback</i>
						<div className="ui two buttons">
							<button
								className="ui green basic button"
								onClick={this.props.approved}
							>
								Approve
							</button>
							<button
								className="ui red basic button"
								onClick={this.props.declined}
							>
								Decline
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ApprovalCard;
