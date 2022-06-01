DROP DATABASE IF EXISTS `cmm_wd313_autos`;

CREATE DATABASE `cmm_wd313_autos`;

USE `cmm_wd313_autos`;


CREATE TABLE `merken` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `naam` varchar(255) DEFAULT NULL,  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `merken` (`id`, `naam`)
VALUES
  (1,'Daf'),    #Nederland
  (2,'Volvo'),  #Zweden
  (3,'BMW'),    #Duitsland
  (4,'Burton'), #Nederland
  (5,'Spyker'), #Nederland
  (6,'Tesla');  #Amerika


CREATE TABLE `landen` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `land` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `landen` (`id`, `land`)
VALUES
  (1,'Nederland'),
  (2,'Zweden'),
  (3,'Duitsland'),
  (4,'Amerika');


CREATE TABLE `autos` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `merk_id` int(11) unsigned DEFAULT NULL,
  `land_id` int(11) unsigned DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `kleur` varchar(100) DEFAULT NULL,
  `brandstof` varchar(100) DEFAULT NULL,
  `zitplaatsen` int(2) DEFAULT NULL,
  `prijs` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `merk_id` (`merk_id`),
  CONSTRAINT `autos_ibfk_1` FOREIGN KEY (`merk_id`) REFERENCES `merken` (`id`),
  CONSTRAINT `autos_ibfk_2` FOREIGN KEY (`land_id`) REFERENCES `landen` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `autos` (`id`, `merk_id`, `land_id` ,`title`, `type`, `kleur`, `brandstof`, `zitplaatsen`, `prijs`)
VALUES
  (1,6,4,'Eerste versie','Model 3','zwart','electra',5,590000),
  (2,2,2,'Lekker offroad','XC70','grijs','diesel',5,49000),
  (3,2,2,'Gezin','V70','wit','Hybrid',5,59000),
  (4,3,3,'Luxe','5','blauw','Hybrid',5,79000),
  (5,5,1,'First Sight','C8 Preliator','blauw','Hybrid',2,129000),
  (6,3,3,'Instap model','1','roze','Benzine',4,15000),
  (7,1,1,'Het begin','600','Geel','benzine',4,5000);