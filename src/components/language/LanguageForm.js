import React from "react";

import LanguageContext from "../../contexts/LanguageContext";

class LanguageForm extends React.Component {
	static contextType = LanguageContext;

	render() {
		let label = "Enter name";
		let buttonText = "Save";
		if (this.context.language != "English") {
			label = "नाम";
			buttonText = "सहेजें";
		}

		return (
			<div>
				<div className="ui divider"></div>

				<form className="ui form">
					<p>{label}</p>
					<input />
					<br />
					<br />
					<button className="ui button primary" type="submit">
						{buttonText}
					</button>
				</form>
			</div>
		);
	}
}

export default LanguageForm;
