import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://aim-application-backend.herokuapp.com/'
});

export default instance;