import React, { useState, useEffect } from "react";

import Resource from "./Resource";
import { api } from "../../services/HttpService";

const ResourceList = props => {
	const [resource, setResource] = useState({ list: [] });

	async function getData() {
		// console.log(props.selectedType);

		const data = await api.get(`/${props.selectedType}`);
		setResource({ list: data.data });
	}
	//
	useEffect(() => {
		getData();
	}, [props.selectedType]);

	function renderList() {
		return resource.list.map(row => <Resource row={row} key={row.id} />);
	}

	return <div className="ui relaxed divided list">{renderList()}</div>;
};

/* class ResourceList extends React.Component {
	state = { list: [] };

	componentDidMount() {
		this.getData();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.selectedType !== this.props.selectedType) {
			this.getData();
		}
	}

	getData = async () => {
		console.log(this.props.selectedType);

		const data = await api.get(`/${this.props.selectedType}`);
		this.setState({ list: data.data });
	};

	renderList() {
		// console.log(this.state.list);

		return this.state.list.map(row => (
			<Resource row={row} key={row.id} />
		));
	}

	render() {
		return (
			<div className="ui relaxed divided list">
				{this.renderList()}
			</div>
		);
	}
} */

/* const ResourceLists = function(props) {
	const [resource, setResource] = useState([]);

	// console.log(resource);
	// async
	function renderList() {
		return resource.map(row => <Resource row={row} />);
		 return await fetchData().then(rows =>
			rows.map(row => <Resource row={row} />)
		);
	}
	// console.log(renderList());

	return (
		<div className="ui relaxed divided list">
		</div>
	);
}; */

export default ResourceList;
