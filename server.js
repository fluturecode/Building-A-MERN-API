if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const cors = require('cors');
// Imports db
require('./db/mongoose');

// Imports routes
const userRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// app.use((req, res) => {
//   console.log(req.method, req.path);
//   res
//     .status(503)
//     .json({ error: 'Site is down for maintenance, check back soon.' });
// });

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
