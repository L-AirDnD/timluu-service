const mysql = require('mysql');
const config = require('../config.js');
const Promise = require('bluebird');
Promise.promisifyAll(require('mysql/lib/Connection').prototype);

const connection = mysql.createConnection(config);

let getReviewsAtOffering = (offeringId) => {
  return connection.queryAsync(
    `SELECT offerings.title, owners.name AS owner, guests.id, guests.name AS guest, reviews.date_posted, reviews.comment, reviews.reply, reviews.ratings 
    FROM reviews, offerings, owners, guests 
    WHERE offerings.id=${offeringId} AND reviews.offering_id=offerings.id AND offerings.owner_id=owners.id AND reviews.guest_id=guests.id;`);
}

module.exports = {
  getReviewsAtOffering
}