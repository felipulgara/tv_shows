USE tv_shows;
SELECT * FROM serie;
SELECT * FROM personage;
SELECT * FROM admin;
SELECT s.name, p.name, p.gender FROM serie s JOIN personage p ON (s.id = p.id_serie);
INSERT INTO serie VALUES('Vikings', 2013);
INSERT INTO personage VALUES ('Ragnar', 'M', 1);
INSERT INTO admin VALUES ('Felipe', 'felipe', '123456');

UPDATE personage SET gender = 1

ALTER TABLE personage
ALTER COLUMN gender INT;

