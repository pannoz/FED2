// Namespace
// APP = APP, als APP niet bestaat dan een leeg object aanmaken
var APP = APP || {};
var a = 1;
// Het object APP loggen
console.log(APP);

// Self-invoking Anonymouse function
// Local scope, is hetzelfde als function scope, is hetzelfde als lexical scope
// Je kan van binnen naar buiten, maar niet van buiten naar binnen
(function(){
	
	// Log voorbeelden
	console.log(a)
	a = 2
	console.log(a)
	APP.b = 3

	// Data objecten, data definiëren
	APP.ranking =  {
		title: 'ranking',
		description: 'Dit is de ranking pagina' 
	}

	APP.schedule = {
		title: 'schedule',
		description: 'Dit is de schedule pagina' 
	}

	APP.game = {
		{ score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
    { score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
    { score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
    { score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
    { score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
    { score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
    { score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
    { score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
    { score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
    { score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
    { score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
    { score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
    { score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
    { score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
    { score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
    { score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
    { score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
    { score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
    { score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
    { score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
    { score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
    { score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
    { score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"} 
	}

	// Controller Object
	APP.controller = {
		init: function (){
			console.log('Controller is ready');
			APP.guide.init();
		}
	}

	// Router Object
	APP.guide = {
		
		//Log
		console.log('Guide is at your service');
		
		// Methode
		init: function (){
			routie({
				'/ranking': function(){
					console.log('Ranking Section');
					//Render de juiste section
					//Geeft je één element
					//Transparency.render(document.getElementById('template'), data);
					//Geeft je een array met elementen, 0 zorgt ervoor dat je alleen de eerste weergeeft
					Transparency.render(qwery('[data-route=ranking')[0], APP.ranking);
				},
				'/schedule': function(){
					console.log('Schedule Section');
				},
				'/game': function(){
					console.log('Game Section');
				}
			});
		}
	}

	// Section

	// DOM ready
	// Hier bepaal je waar je wilt beginnen
	domready(function(){
		console.log('DOM is ready');
		APP.controller.init();
	});

})();

console.log(b)

