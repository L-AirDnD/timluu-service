const db = require('../database/db.js');
const Promise = require('bluebird');
const path = require('path');
const express = require('express');
const app = express();

let port = process.env.port || 3002;

const staticDirectory = path.join(__dirname, '/../public/');
const staticAssets = express.static(staticDirectory);
app.use('/', staticAssets);

app.get('/:offeringId', (req, res) => {
  let offeringId = req.params.offeringId;
  db.getReviewsAtOffering(offeringId)
    .then((reviews) => {
      res.status(200).send(reviews);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})