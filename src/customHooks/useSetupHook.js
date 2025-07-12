import { useEffect, useState } from "react";

import { io } from "socket.io-client";

// const socket = new io("https://fastf.onrender.com");
// for local testing
const socket = new io("process.env.REACT_APP_API_URL");

const useSocketHook = () => {
  useEffect(() => {
    socket.connect();
    socket.on("connected", (data) => {
      console.log(data);
    });

    socket.on("room_members", (data) => {
      console.log(data);
    });

    socket.on("room_update", (data) => {
      console.log(data);
    });
  }, [socket]);

  return [socket.id];
};

export default useSocketHook;
export { socket };
