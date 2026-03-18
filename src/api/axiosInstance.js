import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://electronics-store-api-two.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
