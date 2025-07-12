import { Server } from "socket.io";

const socketConnection = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "https://fast-typing-game.vercel.app", // ✅ your frontend domain
      methods: ["GET", "POST"],
    },
  });

  return io;
};

export default socketConnection;
