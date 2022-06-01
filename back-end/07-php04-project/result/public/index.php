<?php 

require_once ('../Library/settings.php'); // de settings laden
// de header-titel vullen
$header_title = 'Mijn eerste project';
// spaties verwijderen en de headertitel omzetten naar lowercase
$header_title = str_replace(" ","",strtolower($header_title));
// de pagina-titel vullen
$page_title = 'College of MultiMedia | Home';
// header-sjabloon laden
require_once INC . '/header.php';

?> 
<div class="jumbotron">
    <div class="container">
        <h1 id="header_title"><?= $header_title ?></h1>
        <p>Dit is de eerste pagina van mijn project</p>
        <p><a href="<?= PAGES_URL . '/over_mij.php' ?>" class="btn btn-primary btn-lg">Lees meer over mij&raquo;</a></p>
    </div>
</div>

<div class="container">
    <div class="row">
        <!-- roep de render_articles-functie aan en render in dit geval 8 berichten -->
        <?php render_articles(8); ?>
    </div>
    <hr>

<!-- footer-sjabloon laden -->
<?php require INC . '/footer.php'; ?>        