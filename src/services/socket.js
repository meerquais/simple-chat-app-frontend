import { io } from "socket.io-client";

const socket = io("https://simple-chat-app-backend-production.up.railway.app");

export default socket;