import axios from 'axios';

export function getServices() {
    return axios
            .get('http://0.0.0.0:3000/client/components/services/services.json')
            .then(response => response.data)

            .catch(error => {
                throw(error);
            });
}
