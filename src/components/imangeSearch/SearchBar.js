import React from "react";

class SearchBar extends React.Component {
	state = { search: "" };

	// avoid `this` word issue using arrow function
	onChangeInput = e => {
		this.setState({ search: e.target.value });
		// console.log("input changed", this.state.search, e.target.value);
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.search);
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onSubmit}>
					{/* <form className="ui form" onSubmit={e => this.onSubmit(e)}> */}
					<div className="field">
						<label>Search:</label>
						<input
							type="text"
							onChange={this.onChangeInput}
							value={this.state.search}
						/>
					</div>
					<div className="field">
						<button
							className="ui button primary"
							type="submit"
						>
							Search
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
