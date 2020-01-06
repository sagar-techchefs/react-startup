import React from "react";
import ResourceList from "./ResourceList";

const Todo = () => {
	const [resource, setResource] = React.useState("todos");

	function onClickTodo() {
		setResource("todos");
	}

	function onClickPosts() {
		setResource("posts");
	}
	// console.log(resource);
	// console.log("rendered");

	return (
		<div className="ui container">
			<div>
				<button
					className="ui button primary"
					onClick={() => onClickTodo()}
				>
					Todo
				</button>
				<button
					className="ui button primary"
					onClick={() => onClickPosts()}
				>
					Post
				</button>
			</div>
			<ResourceList selectedType={resource} />
		</div>
	);
};

export default Todo;
