export default (streams = {}, action) => {
	switch (action.type) {
		case "GET_STREAMS":
			return { ...streams, streams: action.payload };

		case "GET_STREAM":
			return { ...streams, stream: action.payload };

		case "EDIT_STREAM":
			return {
				...streams,
				streams: streams.streams.map(stream => {
					if (stream.id === action.payload.id) {
						return action.payload;
					} else {
						return stream;
					}
				})
			};

		case "REMOVE_STREAM":
			return { streams: [...streams.streams] };

		case "DELETE_STREAM":
			return {
				streams: streams.streams.filter(
					stream => stream.id !== action.payload
				)
			};

		default:
			return streams;
	}
};
