import axios from 'axios';

export function getEvents() {
	return axios
			.get("/api/events")
			.then(response => response.data)
			.catch(error => {
				throw(error)
			});
}
