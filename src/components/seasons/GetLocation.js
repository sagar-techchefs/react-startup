import { useState, useEffect } from "react";

export default () => {
	const [latitude, setLatitude] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				// console.log(position)
				setLatitude(position.coords.latitude);
			},
			err => {
				// console.info(err);
				setErrorMessage(err.message);
			}
		);
	}, []);

	return [latitude, errorMessage];
};
