import axios from "axios";
//base url formation
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;