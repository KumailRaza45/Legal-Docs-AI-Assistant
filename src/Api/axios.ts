// src/api/axios.js
import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com'; // Replace with your API base URL

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    // You can set other default configurations here
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
