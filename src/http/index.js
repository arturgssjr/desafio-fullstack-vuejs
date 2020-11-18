import axios from "axios";
import config from "../config";

const http = axios.create({
    baseURL: config.api.url
});

export default http;