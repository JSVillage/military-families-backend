import axios from 'axios';

export function getServices() {
    return axios
            .get('/api/services.json')
            .then(response => response.data)

            .catch(error => {
                throw(error);
            });
}
