import React from "react";

import "./seasonDisplay.css";

function getSeason(latitude, month) {
	if (month > 2 && month < 9) {
		return latitude > 0 ? "summer" : "winter";
	} else {
		return latitude > 0 ? "winter" : "summer";
	}
}

const SeasonDisplay = props => {
	const season = getSeason(props.latitude, new Date().getMonth());

	let text, icon;

	if (season === "winter") {
		text = "Burr, it is chilly";
		icon = "snowflake";
	} else {
		text = "Lets hit the beach";
		icon = "sun";
	}

	return (
		<div className={`season-display ${season}`}>
			<i className={`${icon} icon massive season-left-icon`} />
			<h1>
				<center>{text}</center>
			</h1>
			<i className={`${icon} icon massive season-right-icon`} />
		</div>
	);
};

export default SeasonDisplay;
