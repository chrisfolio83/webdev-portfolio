<?php
// haal de settings op
require_once '../library/settings.php';

// nieuwe newscontroller laden
$newscontroller = new NewsController();

// naam tab; wordt gecheckt door de activeMenu-functie in header.php
$active = 'index';
// de header-titel vullen
$header_title = 'Mijn eerste project';
// spaties verwijderen en de headertitel omzetten naar lowercase
$header_title = str_replace(" ","",strtolower($header_title));
// de pagina-titel vullen
$page_title = 'Christian - Home';

// de header laden
require_once LAY_URL . '/header.php';

  ?><div class="jumbotron">
	    <div class="container">
	        <h1 id="header_title"><?= $header_title ?></h1>
	        <p>Dit is de eerste pagina van mijn project</p>
	        <p><a href="./pages/over-mij.php" class="btn btn-primary btn-lg">Lees meer over mij&raquo;</a></p>
	    </div>
	</div>

	<div class="container">
	    <div class="row">

<!-- het juiste viewobject ophalen -->
<? 	$newscontroller->invoke();	?>

    </div>
    <hr>

<!-- de footer laden -->
<?php require_once LAY_URL . '/footer.php'; ?>

	</body>
</html>