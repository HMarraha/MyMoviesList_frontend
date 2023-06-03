import axios from "axios";

const tmbdClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers:{
        Accept: 'application/json'
    },
    params: {
        api_key: '90a80bcfbdbf2c71087abe7a078d2158'
    }
}
)

export default tmbdClient