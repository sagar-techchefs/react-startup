import React from "react";
import LanguageContext from "../../contexts/LanguageContext";

class LanguageChange extends React.Component {
	static contextType = LanguageContext;

	handleSubmit(e) {
		e.preventDefault();
		return false;
	}

	render() {
		const selectedLanguage = this.context.language;
		return (
			<form className="ui form" onSubmit={this.handleSubmit}>
				<p>
					<label>
						{selectedLanguage === "Hindi"
							? "भाषा"
							: "Select Language"}
					</label>
				</p>

				<div className="ui buttons">
					<button
						className={
							selectedLanguage === "English"
								? "ui positive button"
								: "ui button"
						}
						onClick={() =>
							this.context.updateData({
								language: "English"
							})
						}
					>
						En
					</button>
					<div className="or"></div>
					<button
						className={
							selectedLanguage === "Hindi"
								? "ui positive button"
								: "ui button"
						}
						onClick={() =>
							this.context.updateData({
								language: "Hindi"
							})
						}
					>
						हिं
					</button>
				</div>
			</form>
		);
	}
}

export default LanguageChange;
