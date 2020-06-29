import {Connection, WinderSetting} from '../db/schema';
import moment from 'moment';

export default (io) => {
  io.on('connection', (socket) => {
    socket.on('mac address', async (data) => {
      const query = {macAddress: data};
      await Connection.findOneAndUpdate(
          query,
          {$set: {macAddress: data, socketID: socket.id}},
          {upsert: true},
      );
      const winderSetting = await WinderSetting.findOne(query);
      if (!winderSetting) {
        let token = Math.floor((Math.random() * 9000) + 1000).toString();
        const tokenExpiry = moment().add(2, 'hours').toISOString();
        while (await Connection.findOne({token: token})) {
          token = Math.floor((Math.random() * 9000) + 1000).toString();
        }
        await Connection.findOneAndUpdate(
            query,
            {$set: {token: token, tokenExpiry: tokenExpiry}},
        );
        io.to(socket.id).emit('event', `CODE: ${token}`);
      }
    });

    socket.on('disconnect', async (reason)=>{
      const query = {socketID: socket.id};
      const tokenExpiry = moment().toISOString();
      await Connection.findOneAndUpdate(
          query,
          {$set: {tokenExpiry: tokenExpiry}},
      );
    });
  });
};

