import { api } from "../services/HttpService";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (despatch, getState) => {
	await despatch(fetchPosts());

	_.chain(getState().blog)
		.map("userId")
		.uniq()
		.forEach(id => despatch(fetchUser(id)))
		.value();

	// const userIds = _.uniq(_.map(getState().blog, "userId"));

	// call normally
	// userIds.forEach(id => despatch(fetchUser(id)));

	// using await in loop with promise
	/* await Promise.all(
		userIds.map(async id => {
			await despatch(fetchUser(id));
			console.log(id);
		})
	); */

	// using await in loop with for...of
	/* for (const id of userIds) {
		await despatch(fetchUser(id));
		console.log(id);
	} */
};

export const fetchPosts = () => async despatch => {
	const response = await api.get("posts");
	despatch({ type: "FETCH_POSTS", payload: response.data });
};

/* export const fetchPosts = () => dispatch => {
	return _fetchPosts(dispatch);
}; */
// alernative to above function
/* export const fetchPosts = () => dispatch => _fetchPosts(dispatch);

const _fetchPosts = _.memoize(async dispatch => {
	const response = await api.get("posts");
	dispatch({ type: "FETCH_POSTS", payload: response.data });
}); */

/* export const fetchUser = id => async dispatch => {
	const response = await api.get(`users/${id}`);

	dispatch({ type: "FETCH_USER", payload: response.data });
}; */

export const fetchUser = id => dispatch => {
	return _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await api.get(`users/${id}`);

	dispatch({ type: "FETCH_USER", payload: response.data });
});
