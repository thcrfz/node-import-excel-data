import mongoose from 'mongoose';
import app from './app';

// eslint-disable-next-line no-new
new Promise((resolve) => {
  resolve(mongoose.connect(process.env.MONGO_CONNECTION_STRING));
}).then(() => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Connection error:'));
  db.once('open', function () {
    console.log('Connected successfully');
  });
  app.listen(process.env.APP_PORT, () => {
    console.log('Server running in port 3000');
  });
});

