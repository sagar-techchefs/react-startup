import React from "react";
import { connect } from "react-redux";
import { /* fetchPosts */ fetchPostsAndUsers } from "../../actions/blogActions";

import UserHeader from "./UserHeader";

class Blog extends React.Component {
	componentDidMount() {
		// this.props.fetchPosts();
		this.props.fetchPostsAndUsers();
	}

	renderList() {
		return this.props.posts.map(({ id, title, body, userId }) => {
			return (
				<div
					className="row ui segment"
					key={id}
					style={{ maxWidth: "80%", margin: "auto" }}
				>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="desciption">
							<h2>{title}</h2>
							<p>{body}</p>
						</div>
					</div>
					<UserHeader userId={userId} />
				</div>
			);
		});
	}

	render() {
		return (
			<div className="ui relaxed divided list">
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	// console.log(state);

	return { posts: state.blog };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(Blog);
