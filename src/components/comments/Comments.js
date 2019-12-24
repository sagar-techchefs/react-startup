import React from "react";
import faker from "faker";

import ComponentDetail from "./CommentDetail";
import ApprovalCard from "../../shared/components/ApprovalCard";

class Comments extends React.Component {
	approved() {
		console.log("Approved");
	}

	declined() {
		console.log("declined");
	}

	checkInput(e) {
		console.log(e.target.value);
	}

	render() {
		const ComponentDetailComponent = (
			<ComponentDetail
				avatar={faker.image.avatar()}
				author={
					faker.name.firstName() + " " + faker.name.lastName()
				}
				postTime={this.getParsedDate(faker.date.past())}
				comment={faker.random.words()}
			/>
		);
		return (
			<div className="ui comments">
				<h3 className="ui dividing header">Comments</h3>
				<ApprovalCard
					approved={this.approved}
					declined={this.declined}
					checkInput={this.checkInput}
				>
					<h3>Warning!!!</h3>
					Are you sure you wanna do it?
				</ApprovalCard>

				<ApprovalCard
					approved={this.approved}
					declined={this.declined}
					content={ComponentDetailComponent}
				/>

				<ApprovalCard
					approved={this.approved}
					declined={this.declined}
				>
					<ComponentDetail
						avatar={faker.image.avatar()}
						author={
							faker.name.firstName() +
							" " +
							faker.name.lastName()
						}
						postTime={this.getParsedDate(faker.date.past())}
						comment={faker.random.words()}
					/>
				</ApprovalCard>

				<ApprovalCard
					approved={this.approved}
					declined={this.declined}
				>
					<ComponentDetail
						avatar={faker.image.avatar()}
						author={
							faker.name.firstName() +
							" " +
							faker.name.lastName()
						}
						postTime={this.getParsedDate(faker.date.past())}
						comment={faker.random.words()}
					/>
				</ApprovalCard>

				<ApprovalCard
					approved={this.approved}
					declined={this.declined}
				>
					<ComponentDetail
						avatar={faker.image.avatar()}
						author={
							faker.name.firstName() +
							" " +
							faker.name.lastName()
						}
						postTime={this.getParsedDate(faker.date.past())}
						comment={faker.random.words()}
					/>
				</ApprovalCard>

				<ApprovalCard
					approved={this.approved}
					declined={this.declined}
				>
					<ComponentDetail
						avatar={faker.image.avatar()}
						author={
							faker.name.firstName() +
							" " +
							faker.name.lastName()
						}
						postTime={this.getParsedDate(faker.date.past())}
						comment={faker.random.words()}
					/>
				</ApprovalCard>
			</div>
		);
	}

	getParsedDate(date) {
		return date.toString();
	}
}

export default Comments;
