import axios from "axios";
const apiKey = import.meta.env.VITE_TMDB_API_KEY
const tmbdClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        Accept: 'application/json'
    },
    params: {
        api_key: apiKey
    }
}
)

export default tmbdClient