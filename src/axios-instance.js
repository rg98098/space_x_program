import axios from 'axios';

const instance = axios.create({
    baseURL:'https://api.spaceXdata.com/'
})

export default instance;