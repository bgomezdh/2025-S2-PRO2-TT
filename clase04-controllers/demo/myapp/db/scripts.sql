-- creando el schema

-- USE schema

-- Crear las tablas

-- Los inserts

CREATE SCHEMA MOVIES_DB;

USE MOVIES_DB;

CREATE TABLE lenguaje (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
	idioma VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE actorLenguaje (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    idActor INT UNSIGNED,
    idLenguaje	INT UNSIGNED,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (idActor) 		REFERENCES actors(id),
    FOREIGN KEY (idLenguaje)	REFERENCES lenguaje(id)
);


-- INSERTS

INSERT INTO lenguaje (idioma) VALUES ("Español");	
INSERT INTO lenguaje (id, idioma, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Ingles", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO lenguaje VALUES (DEFAULT, "Frances", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO lenguaje VALUES (DEFAULT, "Aleman", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO lenguaje (idioma) VALUES ("Japones");	

-- INSERTS 
INSERT INTO actorlenguaje (idActor, idLenguaje) VALUES (4, 2);
INSERT INTO actorlenguaje (idActor, idLenguaje) VALUES (4, 1);
INSERT INTO actorlenguaje (idActor, idLenguaje) VALUES (5, 4);
INSERT INTO actorlenguaje (idActor, idLenguaje) VALUES (60, 3);

-- UPDATES

UPDATE lenguaje SET idioma = "Alemán" WHERE id = 4;
UPDATE actorlenguaje SET idLenguaje = 5 WHERE id > 1;

-- DELETE
DELETE FROM actorlenguaje WHERE id = 5;
DELETE FROM lenguaje WHERE id = 5;

DELETE FROM actorlenguaje WHERE idLenguaje = 5;

