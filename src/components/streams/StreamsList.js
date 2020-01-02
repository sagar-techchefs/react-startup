import React from "react";
import { connect } from "react-redux";

import {
	getStreams,
	editStream,
	deleteStream
} from "../../actions/streamActions";
import Stream from "./Stream.js";
import Modal from "../../shared/components/modalBox/ModalBox";
import ApprovalCard from "../../shared/components/ApprovalCard";
import DataService from "../../contexts/DataService";
import Data from "../../contexts/Data";

class StreamsList extends React.Component {
	// static contextType = DataService;
	state = { show: false };
	selectedId = null;

	componentDidMount() {
		this.props.getStreams();
		// console.log(this.context);
	}

	onClickEdit = id => {
		this.props.history.push(`/streams/edit/${id}`);
	};

	onClickAdd = () => {
		this.props.history.push(`/streams/create`);
	};

	onClickDelete = id => {
		this.selectedId = id;
		this.showModal();
	};

	confirmDelete = () => {
		this.props.deleteStream(this.selectedId);
		this.hideModal();
	};

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		this.setState({ show: false });
	};

	renderList() {
		return this.props.streams.map(
			({ id, title, description, userId }) => (
				<Data.Provider key={id} value="red">
					<DataService.Provider
						key={id}
						// value={[...this.context, id]}
					>
						<Stream
							id={id}
							key={id}
							title={title}
							description={description}
							userId={userId}
							onClickEditStream={this.onClickEdit}
							onClickDeleteStream={this.onClickDelete}
						/>
					</DataService.Provider>
				</Data.Provider>
			)
		);
	}

	render() {
		return (
			<div className="ui container">
				<div role="list" className="ui list">
					{this.props.streams ? this.renderList() : null}
				</div>
				<div style={{ textAlign: "right" }}>
					{this.props.isSignedIn ? (
						<button
							className="ui circular icon button green"
							onClick={this.onClickAdd}
							style={{
								position: "fixed",
								right: "7px",
								bottom: "7px"
							}}
						>
							<i aria-hidden="true" className="add icon" />
						</button>
					) : (
						""
					)}
				</div>
				<main>
					<Modal
						show={this.state.show}
						// handleClose={this.hideModal}
						// approved={this.hideModal}
					>
						<ApprovalCard
							approved={this.confirmDelete}
							declined={this.hideModal}
							content="Are you sure you wanna delele it ?"
						/>
					</Modal>
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => {
	if (state.streams.streams) {
		return {
			streams: state.streams.streams,
			isSignedIn: state.auth.isSignedIn
		};
	} else {
		return { streams: [] };
	}
};

export default connect(mapStateToProps, {
	getStreams,
	editStream,
	deleteStream
})(StreamsList);
