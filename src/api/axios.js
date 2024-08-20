import axios from "axios";

const BASE_URL = "https://test-backend-node.onrender.com";
// const BASE_URL = ''; // LOCAL server
// const BASE_URL = ''; // LIVE server
// const BASE_URL = ''; // TEST server

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Cross-Origin-Resource-Policy"] = "cross-origin";

export default axios.create();

export const axiosPrivate = axios.create({
  withCredentials: true,
});
