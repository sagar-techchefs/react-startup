import { localApi } from "../services/HttpService";

export const createStream = formValues => async despatch => {
	await localApi.post("streams", formValues);
	despatch(getStreams());
};

export const getStreams = () => async despatch => {
	const streams = await localApi.get("streams");
	despatch({ type: "GET_STREAMS", payload: streams.data });
};

export const getStream = id => async despatch => {
	const streams = await localApi.get(`streams/${id}`);
	despatch({ type: "GET_STREAM", payload: streams.data });
};	

export const removeStream = () => async despatch => {
	despatch({ type: "REMOVE_STREAM" });
};

export const editStream = formValues => async despatch => {
	const streams = await localApi.put(`streams/${formValues.id}`, formValues);
	despatch({ type: "EDIT_STREAM", payload: streams.data });
};

export const deleteStream = id => async despatch => {
	await localApi.delete(`streams/${id}`);
	despatch({ type: "DELETE_STREAM", payload: id });
};
