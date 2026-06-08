import { io } from "socket.io-client";

const socket = io("simple-chat-app-backend-production.up.railway.app");

export default socket;