/**************************************
***                                 ***
***    DATABASE & TABLE CREATION    ***
***                                 ***
***************************************/

DROP DATABASE IF EXISTS lairdnd;
CREATE DATABASE lairdnd;

USE lairdnd;

CREATE TABLE offerings (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE owners (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE guests (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  offering_id INT NOT NULL,
  owner_id INT NOT NULL,
  guest_id INT NOT NULL,
  date_posted DATE NOT NULL,
  comment VARCHAR(255) NOT NULL,
  reply VARCHAR(255) NULL,
  ratings JSON NOT NULL,
  
  PRIMARY KEY (id),
  
  FOREIGN KEY (offering_id)
    REFERENCES offerings(id),
  FOREIGN KEY (guest_id)
    REFERENCES guests(id),
  FOREIGN KEY (owner_id)
    REFERENCES owners(id)
);

/**************************************
***                                 ***
***     SEEDING SIMULATED DATA      ***
***                                 ***
***************************************/

INSERT INTO offerings (title) VALUES ('2 Caveroom Lair in the Trolliest of Dungeons');

INSERT INTO owners (name) VALUES ('Trolley McTrollerson');

INSERT INTO guests 
  (name) 
VALUES 
  ('Orc McDorc 0'), ('Orc McDorc 1'), ('Orc McDorc 2'), ('Orc McDorc 3'), ('Orc McDorc 4'),
  ('Orc McDorc 5'), ('Orc McDorc 6'), ('Orc McDorc 7'), ('Orc McDorc 8'), ('Orc McDorc 9'),
  ('Orc McDorc 10'), ('Orc McDorc 11'), ('Orc McDorc 12'), ('Orc McDorc 13'), ('Orc McDorc 14'),
  ('Orc McDorc 15'), ('Orc McDorc 16'), ('Orc McDorc 17'), ('Orc McDorc 18'), ('Orc McDorc 19'),
  ('Orc McDorc 20'), ('Orc McDorc 21'), ('Orc McDorc 22'), ('Orc McDorc 23'), ('Orc McDorc 24'),
  ('Derpy Derperson 0'), ('Derpy Derperson 1'), ('Derpy Derperson 2'), ('Derpy Derperson 3'), ('Derpy Derperson 4'),
  ('Derpy Derperson 5'), ('Derpy Derperson 6'), ('Derpy Derperson 7'), ('Derpy Derperson 8'), ('Derpy Derperson 9'),
  ('Derpy Derperson 10'), ('Derpy Derperson 11'), ('Derpy Derperson 12'), ('Derpy Derperson 13'), ('Derpy Derperson 14'), 
  ('Derpy Derperson 15'), ('Derpy Derperson 16'), ('Derpy Derperson 17'), ('Derpy Derperson 18'), ('Derpy Derperson 19'),
  ('Derpy Derperson 20'), ('Derpy Derperson 21'), ('Derpy Derperson 22'), ('Derpy Derperson 23'), ('Derpy Derperson 24'),
  ('Stumpy LeThumpy 0'), ('Stumpy LeThumpy 1'), ('Stumpy LeThumpy 2'), ('Stumpy LeThumpy 3'), ('Stumpy LeThumpy 4'), 
  ('Stumpy LeThumpy 5'), ('Stumpy LeThumpy 6'), ('Stumpy LeThumpy 7'), ('Stumpy LeThumpy 8'), ('Stumpy LeThumpy 9'), 
  ('Stumpy LeThumpy 10'), ('Stumpy LeThumpy 11'), ('Stumpy LeThumpy 12'), ('Stumpy LeThumpy 13'), ('Stumpy LeThumpy 14'), 
  ('Stumpy LeThumpy 15'), ('Stumpy LeThumpy 16'), ('Stumpy LeThumpy 17'), ('Stumpy LeThumpy 18'), ('Stumpy LeThumpy 19'), 
  ('Stumpy LeThumpy 20'), ('Stumpy LeThumpy 21'), ('Stumpy LeThumpy 22'), ('Stumpy LeThumpy 23'), ('Stumpy LeThumpy 24');

  INSERT INTO reviews
    (offering_id, owner_id, guest_id, date_posted, comment, reply, ratings)
  VALUES
    (1, 1, 1, '2019-01-01', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 2, '2019-01-02', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 3, '2019-01-03', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 4, '2019-01-04', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 5, '2019-01-05', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 6, '2019-01-06', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 7, '2019-01-07', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 8, '2019-01-08', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 9, '2019-01-09', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 10, '2019-01-10', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 11, '2019-01-11', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 12, '2019-01-12', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 13, '2019-01-13', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 14, '2019-01-14', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 15, '2019-01-15', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 16, '2019-01-16', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 17, '2019-01-17', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 18, '2019-01-18', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 19, '2019-01-19', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 20, '2019-01-20', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 21, '2019-01-21', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 22, '2019-01-22', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 23, '2019-01-23', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 24, '2019-01-24', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 25, '2019-01-25', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 26, '2019-01-26', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 27, '2019-01-27', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 28, '2019-01-28', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 29, '2019-01-29', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 30, '2019-01-30', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 31, '2019-01-31', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 32, '2019-02-01', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 33, '2019-02-02', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 34, '2019-02-03', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 35, '2019-02-04', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 36, '2019-02-05', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 37, '2019-02-06', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 38, '2019-02-07', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 39, '2019-02-08', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 41, '2019-02-09', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 42, '2019-02-10', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 43, '2019-02-11', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 44, '2019-02-12', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 45, '2019-02-13', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 46, '2019-02-14', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 47, '2019-02-15', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 48, '2019-02-16', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 49, '2019-02-17', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 50, '2019-02-18', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 51, '2019-02-19', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 52, '2019-02-20', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 53, '2019-02-21', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 54, '2019-02-22', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 55, '2019-02-23', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 56, '2019-02-24', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 57, '2019-02-25', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 58, '2019-02-26', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 59, '2019-02-27', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 60, '2019-02-28', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 61, '2019-03-01', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 62, '2019-03-02', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 63, '2019-03-03', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 64, '2019-03-04', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 65, '2019-03-05', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 66, '2019-03-06', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 67, '2019-03-07', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 68, '2019-03-08', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 69, '2019-03-09', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 70, '2019-03-10', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 71, '2019-03-11', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 72, '2019-03-12', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 73, '2019-03-13', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 74, '2019-03-14', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 75, '2019-03-15', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 1, '2019-03-16', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 2, '2019-03-17', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 3, '2019-03-18', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 4, '2019-03-19', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 5, '2019-03-20', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 6, '2019-03-21', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 7, '2019-03-22', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 8, '2019-03-23', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 9, '2019-03-24', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 10, '2019-03-25', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 11, '2019-03-26', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 12, '2019-03-27', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 13, '2019-03-28', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 14, '2019-03-29', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 15, '2019-03-30', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 16, '2019-03-31', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 17, '2019-04-01', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 18, '2019-04-02', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 19, '2019-04-03', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 20, '2019-04-04', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 21, '2019-04-05', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 22, '2019-04-06', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 23, '2019-04-07', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 24, '2019-04-08', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 25, '2019-04-09', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }'),
    (1, 1, 26, '2019-04-10', 'test', null, '{ "accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1 }');