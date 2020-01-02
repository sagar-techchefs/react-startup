// importing named export use {}
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import postsReducer from "./postsReducer";
import userReducer from "./userReducer";
import steamReducer from "./streamReducer";

const authReducer = (auth = { isSignedIn: null, userId: null }, action) => {
	switch (action.type) {
		case "SIGN_IN":
			return {
				...auth,
				isSignedIn: true,
				userId: action.payload
			};

		case "SIGN_OUT":
			return { ...auth, isSignedIn: false, userId: null };

		default:
			return auth;
	}
};

const songsReducer = () => {
	return [
		{ title: "Song 1", duration: "05.00" },
		{ title: "Song 2", duration: "05.32" },
		{ title: "Song 3", duration: "04.28" },
		{ title: "Song 4", duration: "04.00" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

// insurance reducers
const policies = (policyList = [], action) => {
	if (action.type === "CREATE_POLICY") {
		return [...policyList, action.payload];
	} else if (action.type === "DELETE_POLICY") {
		return policyList.filter(
			policyObj => policyObj.name !== action.payload.name
		);
	}
	return policyList;
};

const account = (accoutBalance = 100, action) => {
	// debugger
	if (action.type === "CREATE_POLICY") {
		return accoutBalance + parseInt(action.payload.amount);
	} else if (action.type === "CLAIM_POLICY") {
		return accoutBalance - action.payload.claimAmmount;
	}

	return accoutBalance;
};

const claimHistory = (claimHistoryList = [], action) => {
	if (action.type === "CLAIM_POLICY") {
		return [...claimHistoryList, action.payload];
	}
	return claimHistoryList;
};

export default combineReducers({
	form: formReducer,
	auth: authReducer,
	songs: songsReducer,
	selectedSong: selectedSongReducer,
	policies: policies,
	account: account,
	claimHistory: claimHistory,
	blog: postsReducer,
	users: userReducer,
	streams: steamReducer
});
