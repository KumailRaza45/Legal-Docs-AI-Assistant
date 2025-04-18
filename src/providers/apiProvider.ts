// src/api/service.ts

import axiosInstance from "../Api/axios";

export const fetchData = async (): Promise<any> => {
    try {
        const response = await axiosInstance.get('/endpoint'); // Replace '/endpoint' with your actual endpoint
        return response.data;
    } catch (error) {

        // Optionally re-throw the error if you want to handle it in the component
        throw error;
    }
};

// Add more service functions for different API endpoints as needed
