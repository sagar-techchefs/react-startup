import React from "react";
import { Field, reduxForm } from "redux-form";
import {
	createStream,
	getStream,
	editStream,
	removeStream
} from "../../actions/streamActions";
import { connect } from "react-redux";
import DataServiece from "../../contexts/DataService";

class CreateStream extends React.Component {
	static contextType = DataServiece;

	componentDidMount = () => {
		if (this.props.match.params.id) {
			this.props.getStream(this.props.match.params.id);
		}
	};

	componentWillUnmount = () => {
		if (this.props.match.params.id) {
			this.props.removeStream();
		}
	};

	renderInput = ({ input, label, meta }) => {
		const className = `field ${
			meta.touched && meta.error ? "error" : ""
		}`;

		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} />
				{this.renderError(meta)}
			</div>
		);
	};

	cancel = () => {
		this.props.history.push(`/streamsList`);
	};

	renderButton = () => {
		return (
			<div style={{ textAlign: "right" }}>
				<button className="ui button primary" type="submit">
					Submit
				</button>
				<button
					className="ui button primary"
					type="button"
					onClick={this.cancel}
				>
					Cancel
				</button>
			</div>
		);
	};

	renderError = ({ touched, error }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="">{error}</div>
				</div>
			);
		} else {
			return;
		}
	};

	onFormSubmit = formValues => {
		const id = this.props.match.params.id;
		if (!id) {
			this.props.createStream({
				...formValues,
				userId: this.props.userId
			});
		} else {
			this.props.editStream({
				...formValues,
				userId: this.props.userId,
				id: id
			});
		}
		this.props.history.push(`/streamsList`);
	};

	render() {
		return (
			<div className="ui container">
				<form
					className="ui form error"
					onSubmit={this.props.handleSubmit(this.onFormSubmit)}
				>
					<Field
						name="title"
						component={this.renderInput}
						label="Enter title"
					/>

					<Field
						name="description"
						component={this.renderInput}
						label="Enter description"
					/>
					<Field name="action" component={this.renderButton} />
				</form>
			</div>
		);
	}
}

const validate = formValues => {
	const errors = {};

	if (!formValues.title) {
		errors.title = "Required";
	}

	if (!formValues.description) {
		errors.description = "Required";
	}

	return errors;
};

const mapStateToProps = (state, props) => {
	if (props.match.params.id) {
		return {
			userId: state.auth.userId,
			initialValues: state.streams.stream
		};
	}
	return {
		userId: state.auth.userId
	};
};

const formWrapped = reduxForm({ form: "createStream", validate })(CreateStream);
export default connect(mapStateToProps, {
	createStream,
	getStream,
	editStream,
	removeStream
})(formWrapped);
