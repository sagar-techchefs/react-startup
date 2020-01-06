import React from "react";

const Resource = props => {
	// ewruern;
	const { id, title, body } = props.row;
	// console.log(id, title, body);
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
					{/* <p>{body}</p> */}
				</div>
			</div>
		</div>
	);
};

export default Resource;
