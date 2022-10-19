// imports
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
// config vars
const PORT = process.env.PORT || 4000;
const DB = process.env.DB || 'mongodb://127.0.0.1/ejemplo';
// db connection
mongoose.connect(DB)
  .then(() => console.log(`DB connected @ ${DB}`))
  .catch(err => console.error(err));
// app instance
const app = express();
// Message model
const MessageSchema = new mongoose.Schema({
  msg: String,
  timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', MessageSchema);
// middleware
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));
// routes
app.post('/api/messages', (req, res) => {
  const { msg } = req.body;
  const newMessage = new Message({ msg });
  newMessage.save((err, msg) => {
    res.status(201).json(msg);
  });
});
app.get('/api/messages', (req, res) => {
  Message.find().sort('-timestamp').exec((err, msgs) => {
    res.status(200).json(msgs);
  })
});
app.get('/api/messages/last', (req, res) => {
  Message.find().sort('-timestamp').limit(1).exec((err, result) => {
    res.status(200).json(result);
  });
});
// listen
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
