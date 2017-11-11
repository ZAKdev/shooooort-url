import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as apiShoort from './modules';

const app = express();

// For cros domains
app.use(cors());

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/get-shorten', (req, res) => {
  apiShoort.getShorten(req.body.url)
    .then(response => res.status(200).json(response.data))
    .catch(err => res.status(500).json(err.data))
});

app.listen(2000, () => {
    console.log('App is running on port 2000');
});