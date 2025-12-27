import axios from "axios";

const API_BASE_URL = "http://localhost:8083"; // Spring Boot backend

export const getStreams = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/streams`);
    return response.data;
  } catch (error) {
    console.error("Error fetching streams:", error);
    return [];
  }
};
