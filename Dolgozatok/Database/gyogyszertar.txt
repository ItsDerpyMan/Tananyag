CREATE DATABASE gyogyszar
CHARACTER SET utf8 
COLLATE utf8_hungarian_ci

Normalizálás:

[] = tábla 
NAGYBETŰ = primary key
{} = idegen key

[gyogyszer]
GYOGYSZER_ID
gyogyszer_nev

[orvos]
KEZELOORVOS_ID
orvos_nev
orvos_szakterulet

[paciens]
PACIENS_ID
paciens_nev
telefon
email

[vizsgalat]
{PACIENS_ID}
{KEZELOORVOS_ID}
VIZSGALAT_ID
vizsgalat_datuma

[Páciens-Gyógyszer]
{PACIENS_ID}
{GYOGYSZER_ID}
adagolas
kezdes_datuma


CREATE TABLE orvos
(
    kezeloorvos_id int AUTO_INCREMENT PRIMARY KEY ,
    orvos_nev varchar(100),
    orvos_szakterulet varchar(100)
);

CREATE TABLE paciens
(
    paciens_id int AUTO_INCREMENT PRIMARY KEY ,
    paciens_nev varchar(100),
    telefon varchar(15),
    email varchar(100)
);

CREATE TABLE gyogyszer
(
    gyogyszer_id int AUTO_INCREMENT PRIMARY KEY ,
    gyogyszer_nev varchar(100)
);

CREATE TABLE vizsgalat
(
    vizsgalat_id int AUTO_INCREMENT PRIMARY KEY,
    paciens_id int,
    orvos_id int,
    vizsgalat_datuma DATE,
    FOREIGN KEY (paciens_id) REFERENCES paciens(paciens_id) ON DELETE CASCADE,
    FOREIGN KEY (orvos_id) REFERENCES orvos(kezeloorvos_id) ON DELETE CASCADE
);

CREATE TABLE paciensgyogyszer
(
    paciens_id int,
    gyogyszer_id int,
    adagolas varchar(100),
    FOREIGN KEY (paciens_id) REFERENCES paciens(paciens_id) ON DELETE CASCADE,
    FOREIGN KEY (gyogyszer_id) REFERENCES gyogyszer(gyogyszer_id) ON DELETE CASCADE
);

ALTER TABLE paciensgyogyszer
ADD kezdes_datuma DATE

ALTER TABLE paciensgyogyszer
DROP kezdes_datuma

DROP TABLE gyogyszer
DROP TABLE orvos
DROP TABLE vizsgalat
DROP TABLE paciens
DROP TABLE gyogyszer
DROP TABLE paciens

DROP DATABASE gyogyszar 