<?php
// debug aan
$debug = true;
// errors zien AAN
ini_set('display_errors', $debug);
// error_reporting: alles
error_reporting(E_ALL);

$validMimeTypes = array('image/jpeg', 'image/png'); // welke bestandstypes accepteren?
$max_filesize = 300000; // hoeveel bytes upload maximaal?
$upload_dir = '../../upload/'; // waar wordt het temp.bestand heen geschreven?

?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Over mij</title>
	<link rel="stylesheet" type="text/css" href="../css/default.css">
</head>
<body>
	<nav>
		<ul>			
			<li><a href="../index.php">Over mij</a></li>
			<li><a href="form.php">Verander profielfoto</a></li>
		</ul>
	</nav>
	<div>			
		<h1>Upload een andere profielfoto</h1>
		
		<!-- enctype is nodig om aan te geven dat het om binary upload gaat -->
		<form
			action="<?= htmlspecialchars($_SERVER['PHP_SELF']); ?>"
			method="post"			
			enctype="multipart/form-data"
			id="mijnForm"
			name="mijnForm" >

			<label for="bestand">Bestand:</label>
			<input type="file" name="bestand" id="bestand">

			<label for="verstuur"></label>
			<input type="submit" name="verstuur" id= "verstuur" value="Verstuur">

<?php 
// als er een bestand in de array zit en er is geen error
if (isset($_FILES['bestand']) && 0 === $_FILES['bestand']['error']){

	// de variabele $file vullen met het bestand
	$file = $_FILES['bestand'];

	// als een van de valide mimetypes als type in de file-array zit 
	// en de grootte vh bestand is kleiner de de max ingesteld filesize in bytes
	// 
	if ( in_array($file['type'], $validMimeTypes ) && $file['size'] <= $max_filesize){
		
		// vul de $nieuwenaam var met de uploaddir + bestandsnaam
		$nieuwenaam =  $upload_dir . 'picture.up';

			// verplaats het tijdelijke bestand naar de images-folder
			move_uploaded_file($file['tmp_name'], $nieuwenaam );

			// laat een berichtje zien dat het uploaden is gelukt
			echo '<p class="geldig">Uploaden gelukt.</p>' . "\n";
		}
	else {
		// en anders: laat een berichtje zien dat het bestandstype incorrect of het bestand te groot is
		echo '<p class="ongeldig">Ongeldig bestandstype of te groot bestand!</p>' . "\n";
	}
}
?>
		</form>		
	</div>
</body>
</html>