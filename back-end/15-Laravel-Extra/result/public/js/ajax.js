$.ajax( {
		url      : 'http://localhost:8000/ajax/news',
		method   : 'GET',
		dataType : 'json',
		beforeSend: function() {
              $(".loading-image").show();
           },
		success  : function ( data ) {
			// extra inzicht in teruggekeerde data via inspect-modus/console-tab:
			// console.log(data);
			
			// voor ieder element met de class title..
			$.each( $('.title'), function(i){
				// ..injecteer daar de inhoud van data[nummer].title
				// uit de door ajax opgevraagde data/json
				this.textContent = data[i].title;
				// en injecteer in de href de string '/news/' met daarachter data[berichtnr].id 
				this.href = '/news/' + data[i].id;
			}); //einde $.each()

			// voor ieder element met de class pub-date..
			$.each( $('.pub-date'), function(i){
				// ..injecteer daar de inhoud van data[nummer].title
				// uit de door ajax opgevraagde data/json
				// maar eerst even obv de seperator '-' de timestamp uit elkaar trekken naar een array..
				var s = data[i].publish_date.split('-');
				// ..om hem later weer omgekeerd terug te geven als string in NL notatie
				this.textContent = s[2] + '-' + s[1] + '-' + s[0];
			}); //einde $.each()

			// voor ieder element met de class inhoud..
			$.each( $('.inhoud'), function(i){
				// ..injecteer daar de inhoud van data[nummer].body
				// uit de door ajax opgevraagde data
				// en laat dmv de substr()-method alleen de eerste 100 tekens zien
				this.textContent = data[i].body.substr(0, 150);
			}); //einde $.each()

			// voor ieder element met de class lees-meer..
			$.each( $('.lees-meer'), function(i){
				// ..injecteer in de href de string '/news/' met daarachter data[berichtnr].id 
				// uit de door ajax opgevraagde data
				this.href = '/news/' + data[i].id;
			}); //einde $.each()	

		} // einde function on success		
	}); // einde $.ajax