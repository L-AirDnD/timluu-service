let mysql = require('mysql');
let config = require('../config.js');
let Promise = require('bluebird');
Promise.promisifyAll(require('mysql/lib/Connection').prototype);
let faker = require('faker');

let connection = mysql.createConnection(config);

connection.queryAsync(`DROP DATABASE IF EXISTS lairdnd; CREATE DATABASE lairdnd;`)
  .then(() => { 
    return connection.queryAsync(`USE lairdnd;`);
  })
  .then(() => {
    return connection.queryAsync(`CREATE TABLE owners (
      id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(255),
      PRIMARY KEY (id)
    );`);
  })
  .then(() => {
    return connection.queryAsync(`CREATE TABLE offerings (
      id INT NOT NULL AUTO_INCREMENT,
      title VARCHAR(255),
      owner_id INT NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (owner_id)
        REFERENCES owners(id)
    );`);
  })
  .then(() => {
    return connection.queryAsync(`CREATE TABLE guests (
      id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(255),
      photo_url VARCHAR(2038),
      PRIMARY KEY (id)
    );`);
  })
  .then(() => {
    return connection.queryAsync(`CREATE TABLE reviews (
      id INT NOT NULL AUTO_INCREMENT,
      offering_id INT NOT NULL,
      guest_id INT NOT NULL,
      date_posted DATE NOT NULL,
      comment TEXT NOT NULL,
      reply TEXT NULL,
      ratings JSON NOT NULL,
      
      PRIMARY KEY (id),
      
      FOREIGN KEY (offering_id)
        REFERENCES offerings(id),
      FOREIGN KEY (guest_id)
        REFERENCES guests(id)
    );`);
  })
  .then(() => {
    let owners = [];
    for(var i = 0; i < 100; i++) {
      let randomOwner = faker.name.findName();
      owners.push(`"${randomOwner}"`);
    }
    owners = owners.join(`), (`);
    return connection.queryAsync(`INSERT INTO owners (name) VALUES (${owners});`)
  })
  .then(() => {
    let offerings = [];
    for(var i = 0; i < 100; i++) {
      let randomPlace = faker.address.city() + faker.address.country();
      let randomOwner = faker.random.number({
        min: 1,
        max: 100
      });
      offerings.push(`"${randomPlace}", ${randomOwner}`);
    }
    offerings = offerings.join(`), (`);
    return connection.queryAsync(`INSERT INTO offerings (title, owner_id) VALUES (${offerings});`)
  })
  .then(() => {
    let guests = [];
    for(var i = 0; i < 100; i++) {
      let randomGuest = faker.name.findName();
      let randomURL = faker.image.imageUrl();
      guests.push(`"${randomGuest}", "${randomURL}"`);
    }
    guests = guests.join(`), (`);
    return connection.queryAsync(`INSERT INTO guests (name, photo_url) VALUES (${guests});`)
  })
  .then(() => {
    let reviews = [];
    for(var i = 0; i < 100; i++) {
      let review = []; 
      review.push(faker.random.number({
        min: 1,
        max: 100
      }));
      review.push(faker.random.number({
        min: 1,
        max: 100
      }));
      review.push(`"${faker.date.past(10).toJSON().slice(0,10)}"`);
      review.push(`"${faker.lorem.sentence()}"`);
      review.push(`null`);
      let ratings = {
        accuracy: faker.random.number({
          min: 1,
          max: 5
        }),
        communication: faker.random.number({
          min: 1,
          max: 5
        }), 
        cleanliness: faker.random.number({
          min: 1,
          max: 5
        }),
        location: faker.random.number({
          min: 1,
          max: 5
        }),
        checkin: faker.random.number({
          min: 1,
          max: 5
        }),
        value: faker.random.number({
          min: 1,
          max: 5
        })
      };
      review.push(`'${JSON.stringify(ratings)}'`);
      reviews.push(review.join(`, `));
    }
    reviews = reviews.join('), (');
    return connection.queryAsync(`INSERT INTO reviews (offering_id, guest_id, date_posted, comment, reply, ratings)
      VALUES (${reviews});`);
  })
  .then(() => {
    console.log('Data has been loaded.');
    connection.end();
  })
  .catch((err) => { 
    console.log(err); 
    connection.end(); 
  });
