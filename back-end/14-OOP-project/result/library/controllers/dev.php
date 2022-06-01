<?php

/**
 * Class DevController: hierin staan handige functies die het ontwikkelen gemakkelijker maken
 */
class DevController {
	/**
	 * 		   	[ Deze functie geeft een beeld van de informatie(flow) in/tussen de superglobals ]
	 * @return 	[ string | object ]		   [ samenvatting van de GET- en POST- en SESSION-arrays ]
	 */
	public function myDevTools(){
		echo '<pre><small>get-</small>';
				
				// print de GET-array
				print_r($_GET);
				echo '<br><small>post-</small>';

				// print de POST-array
				print_r($_POST);

				// laat alleen een print vd session-array zien 
				// als er een sessie (dus session_id) actief is
				// 
				if (session_id() ) {
					echo '<br><small>session-</small>';
					print_r($_SESSION);
				}
		echo '</pre>';
	} // einde functie

} // einde class DevController