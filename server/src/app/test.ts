import io from "../server.js";

io.on("connection", (socket) => {
  socket.on("hello", () => {
    console.log("Client sent hello");
  });
});
