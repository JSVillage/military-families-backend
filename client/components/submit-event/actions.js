import axios from 'axios';

export function postEvent(model) {
	return axios
			.post("/api/events", model)
			.then(response => response)
			.catch(error => {
				throw(error)
			});
}
