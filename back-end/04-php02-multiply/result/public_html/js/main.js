window.onload = function(){
		
// GLOBAL VARS
	// 	haal de knop op
	var bereken_btn = document.getElementById("bereken_btn");
	// 	haal het getalveld op
	var getal 		= document.getElementById("getal");	
				
// EVENTS
	//	voeg een click-event toe aan de button		
	bereken_btn.addEventListener('click',function(e){
		// het resultaat is de waarde van het ingevoerde getal		
		var result = getal.value;
		// console.log(result); --> temp dev-tool
		// pomp de front-end-waarde in de href, zodat deze aan de back-end door PHP kan 
		// worden opgehaald en in de $tafel variabele kan worden gepompt
		window.location.href = "index.php?result=" + result;		
	});

	// 	de enter-key uitschakelen bij focus op inputfield
	// 	voeg een eventlistener toe die wacht op een keypress
	getal.addEventListener('keypress',function(noEnter){
		// functie wordt alleen uitgevoerd bij keypress 'enter' --> 13 is enter
		if (noEnter.keyCode == 13) {
		// enter niet uitvoeren		
        	noEnter.preventDefault(); 
   		}	
	});		
}// einde window.onload