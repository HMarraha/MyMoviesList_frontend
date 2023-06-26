import axios from "axios";

const moviesClient = axios.create({
    baseURL : 'http://localhost:8000/api'
})

export default moviesClient