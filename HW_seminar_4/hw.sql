
-- create
CREATE TABLE odnogrups (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL, 
  adress TEXT NOT NULL
);

-- insert
INSERT INTO odnogrups (name, age, adress) VALUES ("Yana", 28, "Vladimir");
INSERT INTO odnogrups (name, age, adress) VALUES ("Anna", 26, "Moscow");
INSERT INTO odnogrups (name, age, adress) VALUES ("Zlata", 28, "Voronezh");
INSERT INTO odnogrups (name, age, adress) VALUES ("Platon", 30, "Tula");
INSERT INTO odnogrups (name, age, adress) VALUES ("Ira", 30, "Moscow");
INSERT INTO odnogrups (name, age, adress) VALUES ("Natalia", 16, "Moscow");

-- fetch 
SELECT name 
FROM odnogrups 
WHERE adress = "Moscow" AND (age BETWEEN 18 AND 30);