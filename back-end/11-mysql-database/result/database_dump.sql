CREATE DATABASE IF NOT EXISTS `shop`;

USE `shop`;

CREATE TABLE `fruit` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `in_box` int(5) NOT NULL,
  `price` float NOT NULL,
  `color` varchar(15) NOT NULL COMMENT 'De kleur in tekst',
  `weight` decimal(3,0) NOT NULL COMMENT 'Het gewicht van het stuk fruit',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

INSERT INTO `fruit` (`id`, `name`, `in_box`, `price`, `color`, `weight`)
VALUES
	(1,'aardbei',50,0.03,'rood',1),
	(2,'banaan',15,0.25,'geel',15),
	(3,'appel',12,0.15,'geel',25),
	(4,'radijs',40,0.02,'rood',2),
	(5,'meloen',5,1,'groen',100);

CREATE TABLE `stock` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `description` varchar(25) NOT NULL,
  `fruit_id` int(10) NOT NULL,
  `amount` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

INSERT INTO `stock` (`id`, `description`, `fruit_id`, `amount`)
VALUES
	(1, 'Daroyal ', 1, 25),
	(3, 'Christine ', 1, 2),
	(5, 'Florence', 1, 5),
	(2, 'babybanaan', 2, 50),
	(8, 'Bakbanaan', 2, 1),
	(9, 'Giant Cavendish', 2, 6),
	(11, 'Rode banaan', 2, 1),
	(4, 'Granny Smith', 3, 12),
	(7, 'Granny Smith', 3, 0),
	(6, 'Ronde helderrode', 4, 12),
	(10, 'Cherry Belle', 4, 12);