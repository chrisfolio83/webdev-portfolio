<?php 
// haal de settings op
require_once '../../library/settings.php';

// maak een nieuwe newscontroller-instance aan
$newscontroller = new NewsController();


// naam tab; wordt gecheckt door de activeMenu-functie in header.php
$active = 'over_mij';
// de header-titel vullen
$header_title = 'Mijn tweede pagina';
// spaties verwijderen en de headertitel omzetten naar lowercase
$header_title = str_replace(" ","",strtolower($header_title));
// de pagina-titel vullen
$page_title = 'Christian - Over mij';


// de header laden
require_once LAY_URL . '/header.php';


?><div class="jumbotron">
        <div class="container">
            <h1 id="header_title"><?= $header_title ?></h1>
            <p>Op deze pagina zie je allemaal tekst over mij</p>
        </div>
    </div>


<?php
// wanneer de nieuw-knop is aangeklikt (en id dus op 999999999 is gezet)..
if (isset($_GET['id']) && $_GET['id'] == 999999999){
    
    // ..het juiste-viewobject ophalen
    $newscontroller->invoke();


} else {
// laat anders het onderstaande zien: 
?><div class="container">
    
    <div class="row">
        <div class="col-lg-4">
            <h2>Dit is mijn foto</h2>
            <img src="<?= IMG_URL ?>/me_1.jpg" alt="Foto van mij" class="my_picture">
        </div>

        <div class="col-lg-4">
            <h2>Duis vel sem bibendum</h2>
            <p>In vestibulum eget purus non tempus. Duis neque ipsum ornare ac.</p>
        </div>

        <div class="col-lg-4">
            <h2>Proin venenatis</h2>
            <p>Aliquam erat volutpat. Donec ipsum enim, egestas ut sodales eu, elementum non sem. Mauris at laoreet enim, et posuere enim. Suspendisse eu eros erat. Nullam sit amet nunc turpis. Proin non ultrices augue, nec auctor nisi. Nulla facilisi. Proin pharetra nec nibh at gravida. Duis vel sem bibendum, dapibus metus id, sodales nisl. Duis a odio elementum, consequat nulla eget, maximus velit. Ut in tortor justo. Mauris facilisis quam sed arcu venenatis finibus.</p>
        </div>
    </div>

<?php   
// if-else sluiten:
    };  
?>    

    <hr>

<!-- de footer laden -->
<?php require_once LAY_URL . '/footer.php'; ?>