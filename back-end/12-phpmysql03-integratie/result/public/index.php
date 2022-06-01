<?php
/*
 * zorg ervoor dat ik alle errors zichtbaar heb
 */
ini_set('error_reporting', E_ALL);
ini_set('display_errors', true);


/*
 * Br variabele voor een volgende regel in html en in de source
 */
$br = "<br>\n";


/*
 * verbinding maken met de mysql server en database
 * Bewaar een referentie naar de verbinding in een variabele
 */
$mysql_connection = mysqli_connect('localhost', 'root', 'root', 'cmm_wd313_autos');


/*
 * controleer of de verbinding gelukt is, laat anders een error zien
 */
if (mysqli_connect_errno()) {
    echo 'Connect failed:  ' . mysqli_connect_error();
    die();
}


/**
 * testValue controleert en saniteert de waarde van een formulierveld
 * @param  string $naamVeld naam van het veld
 * @return string           waarde van het veld of lege string
 */
function testValue($input){ 
  // wanneer er een GET-input is EN deze is niet leeg EN de key is niet 'reset' 
  if ( isset($_GET[$input]) && !empty($_GET[$input]) && !isset($_GET['reset'])){
    // vul dan de $value-var met de GET-input
    $value = $_GET[$input];
    // verwijder daarna evt. whitespace uit de GET-input
    $value = trim($value);
    // zet daarna potentieel gevaarlijke html-tekens om naar hun entity-codes
    $value = htmlspecialchars($value);
    // haal vervolgens tbv de veiligheid ook nog evt. ingevoerde slashes weg
    $value = stripslashes($value);

    // remove the union, concat and information schema to prevent hacking
    $value = preg_replace(
        '/(union[\s\+]*?select)|(concat(_ws)?\s*?\()|(information_schema)| or /i',
        '',
        $value);
    // geef de gesanitizede waarde terug
    return $value;
  }
  // anders: geef lege string terug
  return '';
} // einde testValue-functie



// sanitize de search_input
$_GET['search_input'] = testValue('search_input');



// $orderby-var vullen met standaard ordenen op `type`
$orderby = 'ORDER BY `type`';

// dit is het gedeelte van de query dat kijkt of de search-input voor een deel overeenkomt met een `naam` of `type` 
$soundslike = 'WHERE `naam` LIKE \'' . $_GET['search_input'] . '%\' OR `type` LIKE \'' . $_GET['search_input'] . '%\'';



// als er geen search-input is dan hoeft er ook niet vergeleken te worden
if (empty($_GET['search_input'])) {
  $soundslike = '';
}


// waneer in de _GET-array de 'order-key' gevuld is en gelijk is aan de value 'type'
if(!empty($_GET['order']) && $_GET['order'] == 'type') {
    // voeg dan onderstaande tekst toe aan de query om naar type te ordenen
    $orderby = 'ORDER BY `type`';
}
// waneer in de _GET-array de 'order-key' gevuld is en gelijk is aan de value 'naam'
if(!empty($_GET['order']) && $_GET['order'] == 'naam') {
    // voeg dan onderstaande tekst toe aan de query om naar naam te ordenen
    $orderby = 'ORDER BY `naam`';
}
// waneer in de _GET-array de 'order-key' gevuld is en gelijk is aan de value 'land'
if(!empty($_GET['order']) && $_GET['order'] == 'land') {
    // voeg dan onderstaande tekst toe aan de query om naar land te ordenen
    $orderby = 'ORDER BY `land`';
}

/*
 * Maak een query om alles op te halen:
 * 
 * Selecteer alles uit de tabel autos en join het met alle 
 * merken en landen, waarbij het auto.merk_id overeenkomt met het 
 * merken.id en het auto.land_id overeenkomt met het landen.id.
 * 
 * Vergelijk het met de waarde uit $soundslike en orden het 
 * volgens de waarde uit $ordenby
 */
$query = 'SELECT * FROM `autos` a
JOIN `merken` m ON m.id = a.merk_id
JOIN `landen` l ON l.id = a.land_id ' 
. $soundslike . ' ' . $orderby ;


/*
 * Voer de query uit om een result object aan te maken
 * Omdat ik mysqli gebruik moet ik er voor zorgen dat ik elke keer het mysql-verbinding-object mee geef
 */
$mysqlResult = mysqli_query($mysql_connection, $query);



?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Opdracht 12 - phpmysql03-integratie</title>
  <link rel="stylesheet" type="text/css" href="css/main.css">
</head>

<body>
  <h1>Tijd voor een leuke auto?</h1>
  <form name="searchform" method="get" action="<?= $_SERVER['PHP_SELF']; ?>">
    <label for="search_input">Zoek: </label>
    <input type="text" name="search_input" id="search_input" value="<?= testValue('search_input'); ?>" required autofocus placeholder="voer merk of type in..">
    <input type="submit" value="submit">
    <input type="submit" value="reset" name="reset" onclick="location.href='?'">
  </form>
<?php

/* Laat de Query zien
 * echo $br;
 * echo 'Query: ' . $query . $br . '<br>' . $br;
 *
 * Laat de $_GET-array zien
 * echo '<pre>';
 * print_r($_GET);
 * echo '</pre>';
 * 
 * Hoeveel items heb ik terug gekregen?
 * echo 'Aantal resultaten: ' . mysqli_num_rows($mysqlResult) . $br . 
 * '<br>' . $br; 
 */

/*
 * Maak een HTML tabel aan voor een betere weergave
 *
 * De search-input en order komen terug in de URL/$_GET-array zodat 
 * de mysql-query de juiste waarden in de tabel kan pompen
 */
echo "<table border='1' cellspacing='0' cellpadding='2'>                              " . "\n" . "
  <tr>                                                                                " . "\n" . "
    <th><a href=?search_input=" . $_GET['search_input'] . "&order=naam>Merk</a></th>  " . "\n" . "
    <th><a href=?search_input=" . $_GET['search_input'] . "&order=type>Type</a></th>  " . "\n" . "
    <th><a href=?search_input=" . $_GET['search_input'] . "&order=land>Land</a></th>  " . "\n" . "
  </tr>                                                                               " . "\n"    ;

/*
 * ik loop nu door het result object heen
 * en vertaal elke mysql regel naar een door php bruikbare array
 * Dit doe ik zolang ik een resultaat heb,
 * elke keer haal ik namelijk 1 regel uit het resultaat object
 */
while ($merk = mysqli_fetch_assoc($mysqlResult)) {
    /*
     * geef de gegevens van elke merk weer
     * Ik heb aangegeven met mysqli_fetch_assoc dat het een assosiative array is
     */
    // begin de rij
    echo '<tr>' . "\n";
    // vul cel met merknaam en maak de eerste letter een hoofdletter
    echo '<td>' . ucfirst($merk['naam']) . '</td>' . "\n";
    // vul cel met type en maak de eerste letter een hoofdletter
    echo '<td>' . ucfirst($merk['type']) . '</td>' . "\n";
    // vul cel met land en maak de eerste letter een hoofdletter
    echo '<td>' . ucfirst($merk['land']) . '</td>' . "\n";
    // eindig de rij
    echo '</tr>' . "\n";
}

// sluit de tabel af
echo '</table>' . "\n";

// wanneer er geen resultaten zijn, dus aantal rijen = 0
if (mysqli_num_rows($mysqlResult) == 0){
  // geef dan onderstaande tekst weer
  echo '<p>Er zijn geen resultaten gevonden</p>' . "\n";
}

?>
</body>
</html>