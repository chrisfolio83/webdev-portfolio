<?php require_once ('../Library/settings.php'); // de settings laden
// de header-titel vullen
$header_title = 'Dit is een bericht';
// spaties verwijderen en de headertitel omzetten naar lowercase
$header_title = str_replace(" ","",strtolower($header_title));
// de pagina-titel vullen
$page_title = 'College of MultiMedia | Bericht';
// header-sjabloon laden
require_once INC . '/header.php';
?>
<div class="jumbotron">
    <div class="container">
        <h1 id="header_title"><?= $header_title ?></h1>
        <p>altijd het laatste nieuws</p>
    </div>
</div>

<div class="container">
    <div class="row">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et erat vitae lacus semper maximus. Fusce pellentesque dolor vitae urna hendrerit elementum. Proin sed rutrum nulla. Donec et faucibus mi. Morbi convallis condimentum libero luctus ultricies. Vivamus venenatis, justo ac rutrum pretium, turpis mi volutpat ante, eget tincidunt turpis diam eget tortor. Praesent ac metus in felis bibendum sollicitudin. Integer ut tortor egestas, convallis velit ut, blandit justo. Morbi sagittis orci libero, et viverra purus pretium nec. Sed feugiat neque vel scelerisque porta. Cras at maximus magna, quis congue purus. Pellentesque sollicitudin fringilla mi, nec sodales est. Sed tincidunt ultrices blandit. Fusce blandit sed risus id venenatis.</p>
		<!-- PHP-echo huidige datum en tijd -->
        <p><?= date("d-m-Y  H:i") ?></p>
    </div>
    <hr>

<!-- footer-sjabloon laden -->
<?php require INC . '/footer.php'; ?>        