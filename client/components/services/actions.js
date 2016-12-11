import axios from 'axios';

export function getServices() {
    return axios
            .get('https://azvetapi.herokuapp.com/api/services.json')
            .then(response => response.data)

            .catch(error => {
                throw(error);
            });
}
