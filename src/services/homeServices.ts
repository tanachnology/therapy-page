import axios from "axios";
import { useAuthStore } from "@/store/AuthStore";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCarrouselImages = async () => {
    try {
        console.log(`Fetching images from: ${API_URL}`);
        const url = `${API_URL}/home/images`;
        
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || "Failed to fetch carrousel images");
        } else if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    }
};

export const addCarrouselImages = async (image_url: string, description: string) => {
    const token = useAuthStore.getState().token;

    try {
        const response = await axios.post(
            `${API_URL}/home/images`,
            { image_url, description },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || "Failed to add carrousel images");
        } else if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    }
};

export const deleteCarrouselImages = async (image_id: string) => {
    const token = useAuthStore.getState().token;

    try {
        const response = await axios.delete(`${API_URL}/home/images/${image_id}`, {
            data: { image_id },
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || "Failed to delete carrousel images");
        } else if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    }

}