<?php require_once ('../Library/settings.php'); // de settings laden

// naam tab
$active = 'over_mij';
// de header-titel vullen
$header_title = 'Mijn tweede pagina';
// spaties verwijderen en de headertitel omzetten naar lowercase
$header_title = str_replace(" ","",strtolower($header_title));
// de pagina-titel vullen
$page_title = 'College of MultiMedia | Over mij';
// header-sjabloon laden
require_once INC . '/header.php';
?><div class="jumbotron">
        <div class="container">
            <h1 id="header_title"><?= $header_title ?></h1>

            <p>Op deze pagina zie je allemaal tekst over mij</p>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <h2>Dit is mijn foto</h2>

                <img src="images/clown_fish.png" alt="Clown Fish" class="my_picture">
            </div>
            <div class="col-lg-4">
                <h2>Hier kan wat tekst staan</h2>

                <p>Een Clown Fish of annemoon vis is een mooie gekleurde vis.</p>
            </div>
            <div class="col-lg-4">
                <h2>Amphiprioninae</h2>
                <p>Clownfish or anemonefish are fishes from the subfamily Amphiprioninae in the family Pomacentridae. Thirty species are recognized: one in the genus Premnas, while the remaining are in the genus Amphiprion. In the wild, they all form symbiotic mutualisms with sea anemones. Depending on species, anemonefish are overall yellow, orange, or a reddish or blackish color, and many show white bars or patches. The largest can reach a length of 15–16 centimetres (5.9–6.3 in), while the smallest barely achieve 7–8 centimetres</p>
				<em>Bron: https://en.wikipedia.org/wiki/Amphiprioninae</em>
            </div>
        </div>

        <hr>

<!-- footer-sjabloon laden -->
<?php require INC . '/footer.php'; ?>