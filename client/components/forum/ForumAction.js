import axios from 'axios';

export function getQuestions() {
    return axios
        .get("/api/forums")
        .then(response => response.data)
        .catch(error => {
            throw (error)
        });
}

export function getQuestion(forumId) {
    return axios
        .get(`/api/forums/${forumId}`)
        .then(response => response.data)
        .catch(error => {
            throw (error)
        });
}

export function postQuestion(model) {
    return axios
        .post("/api/forums", model)
        .then(response => response.data)
        .catch(error => {
            throw (error)
        });
}

export function getAnswers(forumId) {
    return axios
        .get(`/api/forums/${forumId}/answers`)
        .then(response => response.data)
        .catch(error => {
            throw (error)
        });
}

export function postAnswers(forumId, model) {
    return axios
        .post(`/api/forums/${forumId}/answers`, model)
        .then(response => response.data)
        .catch(error => {
            throw (error)
        });
}



export function postReply(forumId, model) {
    return axios
        .post(`https://nameless-sands-91761.herokuapp.com/api/forums/${forumId}/answers`, model)
        .then(response => response.data)
        .catch(error => {
            throw (error)
        });
}
