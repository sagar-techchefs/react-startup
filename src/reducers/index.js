// importing named export use {}
import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

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
	songs: songsReducer,
	selectedSong: selectedSongReducer,
	policies: policies,
	account: account,
	claimHistory: claimHistory,
	blog: postsReducer,
	users: userReducer
});
