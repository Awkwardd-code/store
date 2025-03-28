import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
    withCredentials: true, // send cookies to the server
});

export default axiosInstance;