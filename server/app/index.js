import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './api';

// Initialization of express application
const app = express();

// Using bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow requests from any origin
app.use(cors({ origin: '*' }));

app.use(routes);

const server = app.listen(2000, () => {
  console.log(`Server is up and running on port ${server.address().port}`);
});
