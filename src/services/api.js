import axios from "axios";

const api = axios.create({
    baseURL:"simple-chat-app-backend-production.up.railway.app/api"
});

export default api;