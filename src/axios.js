import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:1035",
});

export default instance;

