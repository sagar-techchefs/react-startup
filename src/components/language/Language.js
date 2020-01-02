import React from "react";

import LanguageForm from "./LanguageForm";
import LanguageChange from "./LanguageChange";
import { LanguageStore } from "../../contexts/LanguageContext";

class Language extends React.Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageChange />
					<LanguageForm />
				</LanguageStore>
			</div>
		);
	}
}

export default Language;
