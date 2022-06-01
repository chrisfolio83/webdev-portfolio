<?php require_once ('../Library/settings.php'); // de settings laden

// naam tab
$active = 'index';
// de header-titel vullen
$header_title = 'Carpe foo bar';
// spaties verwijderen en de headertitel omzetten naar lowercase
$header_title = str_replace(" ","",strtolower($header_title));
// de pagina-titel vullen
$page_title = 'College of MultiMedia | Bericht';
// header-sjabloon laden
require_once INC . '/header.php';

// verbinden met de database via de functie connectToDB() (zie ook functions.php)
$mysqliObject = connectToDB();

// query: selecteer alles uit de tabel nieuwsberichten o.b.v. van de id in $_GET['id']
$query = 'SELECT * FROM `nieuwsberichten` WHERE `id` LIKE '. $_GET['id'];

// stel de vraag aan het database-object
$mysqliResult = $mysqliObject->query($query);

// pomp de resultaten in een associatieve array
$bericht = $mysqliResult->fetch_assoc();

?><div class="jumbotron">
    <div class="container">
        <h1 id="header_title"><?= $header_title ?></h1>

        <p>altijd het laatste nieuws</p>

    </div>
</div>

<div class="container">
    <div class="row container">
        <!-- wanneer ingelogd, laat dan de edit-knop zien -->
        <?php if( isset($_SESSION['ingelogd'])){
            echo '<p class="btn btn-info editknop">edit</p>';
        } ?>
        <!-- laat de titel zien uit de associatieve $bericht-array -->
        <h2>    <?= $bericht['titel']?>             </h2>
        <!-- laat de publicatiedatum zien uit de associatieve $bericht-array -->
        <p>     <?= $bericht['publicatie_datum']?>  </p>
        <!-- laat de inhoud zien uit de associatieve $bericht-array -->
        <p>     <?= $bericht['content']?>           </p>
        <br>            
        <a href="../">Terug</a>     		         
    </div>        
</div>

<hr>

<!-- footer-sjabloon laden -->
<?php require INC . '/footer.php'; ?>