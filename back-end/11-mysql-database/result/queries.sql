# Opdracht  1: 
# zie groentewinkel.sql; deze heb ik volledig gecopy-paste in de mysql> teminal


# Opdracht  2:
# ga naar de fruit-tabel, maak een nieuwe row aan en insert daar in de kolommen 
# name, in_box, price, color en weight..
INSERT INTO `fruit` (`name`, `in_box`, `price`, `color`, `weight`) 
# ..de volgende waarden
VALUES 
	('kers', 30, 0.04, 'paars', 150);


# Opdracht  3:
#  ga naar de stock-tabel, maar 3 nieuwe rows aan en insert daar in de kolommen
#  description, fruit_id en amount..
INSERT INTO `stock` (`description`, `fruit_id`, `amount`) 
# ..de volgende waarden
VALUES 
	('Zoete kers', 6, 30),
	('Bloedkers', 6, 40),
	('Zure kers', 6, 25);
# spreek de stock-tabel aan om een aanpassing door te voeren
ALTER TABLE `stock`
# maak een foreign key genaamd fruit_id_foreign die de fruit_id in de stock-tabel 
# koppelt aan het id in de fruit-tabel
ADD CONSTRAINT `fruit_id_foreign` FOREIGN KEY (`fruit_id`) REFERENCES `fruit` (`id`);


# Opdracht  4:
# tel hoeveel unieke namen/fruits er zijn in de fruit-tabel en laat zien
# als 'unieke fruitsoorten'
SELECT COUNT(DISTINCT `name`) AS 'unieke fruitsoorten' 
FROM `fruit`;


# Opdracht  5:
# vraag alle hoeveelheden op uit de stock-tabel/amount-kolom en tel ze bij
# elkaar op. Laat zien als 'totaal voorraad' 
SELECT SUM(`amount`) AS 'totaal voorraad' 
FROM `stock`;


# Opdracht  6:
# laat de som zien van de amount-kolom (als 'aardbeien-voorraad')..
SELECT SUM(`amount`) AS 'aardbeien voorraad' 
# .. van de stock-tabel..
FROM `stock`
# .. als het fruit_id 1 is (dus aardbei)
WHERE `fruit_id` = 1;


# Opdracht  7:
# roep de hele fruit-tabel op
SELECT * FROM `fruit`
# sorteer aflopend op 'price'
ORDER BY `price` DESC 
# laat alleen de eerste row (dus duurste) zien
LIMIT 0, 1;


# Opdracht  8:
# roep de hele fruit-tabel op
SELECT * FROM `fruit`
# sorteer oplopend op 'price'
ORDER BY `price` ASC
# laat alleen de eerste row (dus goedkoopste) zien 
LIMIT 0, 1;


# Opdracht  9:
# roep de name-kolom op van de fruit-tabel en toon als 'fruit-soorten'
# roep de description-kolom op van de stock-tabel en toon als 'fruit-types'
SELECT `name` AS 'fruit-soorten', `description` AS 'fruit-types' 
FROM `fruit`, `stock`
# kruis de data tot relevante rows, waarbij fruit-tabel.id-kolom = stock-tabel.fruit_id-kolom
WHERE `fruit`.`id` = `stock`.`fruit_id`;


# Opdracht 10:
# selecteer alle unieke entries in de name-kolom en geef weer als
# 'unieke fruit-soorten / fruit-types'
SELECT DISTINCT `name` AS 'unieke fruit-soorten / fruit-types'
# van de fruit-tabel 
FROM `fruit`
# en combineer tot 1 kolom
UNION
# met alle unieke entries uit de description-kolom
SELECT DISTINCT `description`
# van de stock-tabel
FROM `stock`;


# Opdracht 11:
# zet in de stock-kolom de waarden op 0 (in amount-kolom) als 
# het fruit_id = 1 (dus aardbei)
UPDATE `stock` SET `amount` = 0 WHERE `fruit_id` = 1;


# Opdracht 12:
# voeg in de stock-tabel in de description- ,fruit_id- en amount-kolom..
INSERT INTO `stock` (`description`, `fruit_id`, `amount`)
# ..de volgende waarden toe 
VALUES
	('aardbei_4', 1, 10),
	('aardbei_5', 1, 15),
	('aardbei_6', 1, 20);


# Opdracht 13:
# pas de stock-tabel aan
UPDATE `stock`
# verander het fruid_id naar 6 (dus kers) en de # description naar 
# 'kers_' met daaraan het unieke id-nummer uit de id-kolom toegevoegd..
SET `fruit_id` = 6,
	`description` = CONCAT('kers_',`id`)
# als het fruit_id 1 is (dus aardbei)	
WHERE `fruit_id` = 1;