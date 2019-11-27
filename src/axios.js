import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://aimee-github.firebaseio.com'
});

export default instance;