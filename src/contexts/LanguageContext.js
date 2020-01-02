import React from "react";

const Context = React.createContext({ language: "English" });

export class LanguageStore extends React.Component {
	state = { language: "English" };

	updateData = data => {
		this.setState(data);
	};

	render() {
		return (
			<Context.Provider
				value={{ ...this.state, updateData: this.updateData }}
			>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default Context;
