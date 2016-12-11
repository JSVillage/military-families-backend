import axios from 'axios';

export function getEvents() {
	return axios
			.get("https://azvetapi.herokuapp.com/api/events")
			.then(response => response.data)
			.catch(error => {
				throw(error)
			});
}
