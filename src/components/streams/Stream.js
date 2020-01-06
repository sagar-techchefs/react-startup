import React from "react";
import { connect } from "react-redux";

// import DataService from "../../contexts/DataService";
import Data from "../../contexts/Data";

class Stream extends React.Component {
	// static contextType = DataService;

	componentDidMount() {
		// console.log(this.context);
	}
	onClickEdit = () => {
		this.props.onClickEditStream(this.props.id);
	};

	onClickDelete = () => {
		this.props.onClickDeleteStream(this.props.id);
	};

	addActionButton() {
		if (
			this.props.userId === 1 ||
			this.props.userId === this.props.currentUserId
		) {
			return (
				<Data.Consumer>
					{color => (
						<span style={{ textAlign: "right" }}>
							<button
								className={`mini ui circular icon button primary`}
								onClick={this.onClickEdit}
							>
								<i
									aria-hidden="true"
									className="edit icon"
								/>
							</button>
							<button
								className={`mini ui circular icon button ${color}`}
								onClick={this.onClickDelete}
							>
								<i
									aria-hidden="true"
									className="delete icon"
								/>
							</button>
						</span>
					)}
				</Data.Consumer>
			);
		}
	}
	checkData(data) {
		console.log(data);
	}

	render() {
		const id = this.props.id;
		return (
			<div role="listitem" className="item" key={id}>
				<i
					aria-hidden="true"
					className="large middle aligned icon camera"
				/>
				<div className="content">
					<div
						className="header"
						style={{ float: "left", width: "80%" }}
					>
						<span>{this.props.title}</span>
					</div>
					<div
						className="header"
						style={{
							textAlign: "right",
							float: "right",
							width: "20%"
						}}
					>
						{this.addActionButton()}
					</div>
					<div
						className="description"
						style={{ float: "left", width: "100%" }}
					>
						{this.props.description}
					</div>
				</div>
				<div className="ui divider"></div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { currentUserId: state.auth.userId };
};

export default connect(mapStateToProps)(Stream);
