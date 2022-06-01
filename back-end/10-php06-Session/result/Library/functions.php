<?php
/**
 * Deze functie genereert x berichten
 * @param  INT $max_articles  het aantal te renderen artikelen
 * @return STR                return een x aantal berichten
 */
function render_articles($max_articles) {
	for ($i=1; $i <= $max_articles; $i++) {
		// bericht
			// titel
		echo'<div class="col-lg-4"><h2>Bericht  ' . $i . '</h2>' . "\n" .
				// content
				'<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, 
				tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum 
				massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. 
				Donec sed odio dui. </p>' . "\n" .
				// link
				'<p><a class="btn btn-default" href="' . PAGE_URL . '/bericht.php">View details &raquo;</a></p>' . "\n" . 
				// date() geeft in dit geval de huidige tijd en datum weer
				'<p>'. 	date("d-m-Y  H:i") . '</p>' . "\n" .				
			'</div>'; 
			// einde bericht
	}
};