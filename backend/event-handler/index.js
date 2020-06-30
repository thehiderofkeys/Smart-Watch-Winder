import tokenEventHandler from './tokens';
export default (io) => {
  io.on('connection', (socket) => {
    console.log('connected');
    socket.on('disconnect', (reason)=>{
      console.log('disconnected');
    });
  });

  tokenEventHandler(io);
};
