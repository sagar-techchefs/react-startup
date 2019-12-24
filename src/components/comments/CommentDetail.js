import React from "react";
// import faker from "faker"

class CommentDetail extends React.Component {
	render() {
		// console.log(this.props);
		return (
			<div className="comment">
				<div className="avatar">
					<img src={this.props.avatar} alt="avtar" />
				</div>
				<div className="content">
					<a href="/#" className="author">
						{this.props.author}
					</a>
					<div className="metadata">
						<div>{this.props.postTime}</div>
					</div>
					<div className="text">{this.props.comment}</div>
				</div>
			</div>
		);
	}
}

export default CommentDetail;
