export default (io) => {
  io.on('connection', (socket) => {
    console.log('connected');
  });
  io.on('connection', (socket) => {
    socket.on('disconnect', (reason)=>{
      console.log('disconnected');
    });
  });
};
