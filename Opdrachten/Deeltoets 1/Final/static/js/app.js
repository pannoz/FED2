// Namespace
var APP = APP || {};

// Anonymous self invoking function
(function () {
	
	// Ivm parsen naar JSON zonder library
	"use strict";
	
	// Data objecten haal dit weg je hebt dit is onnodige code
	APP.home = {
		title:'Welkom',
		description:'Welkom op de applicatie',
	};

	APP.schedule = {
		title:'Schedule',
		description:'Hieronder ziet u het schema van het toernooi.',
	};

	APP.ranking = {
		title:'Ranking',
		description:'Hieronder ziet u de ranglijst van het tournooi.',
	};

	APP.game = {
		title:'Game',
		description:'Hieronder ziet u het scoreverloop van een wedstrijd.',
	};

	// Controller Object
	APP.controller = {
		init: function () {
			// Initialize router
			APP.router.init();
		}
	};

	// Router Object
	APP.router = {
		init: function () {
	  		routie({
					'/home': function() {
					APP.page.home();
					},
					'/schedule': function() {
					APP.page.schedule();
					},
			    '/ranking': function() {
			    	APP.page.ranking();
			    },
			    '/game': function() {
			    	APP.page.game();
			    },
			   	'/movies': function() {
			    	APP.page.movies();
			    },
			    '*': function() {
			    	APP.page.home();
			    }
			});
		},

		change: function () {
						// Route = #/schedule - 2 karakters = schedule
            var route = window.location.hash.slice(2),
            		// Zoekt alle sections met een data-route
                sections = qwery('section[data-route]'),
                // Section = data-route='schedule' eerste selecteren
                section = qwery('[data-route=' + route + ']')[0];  
                console.log(window.location.hash.slice(2));
            // Show active section, hide all other
            if (section) {
            	// Loopt door alle sections heen
            	for (var i=0; i < sections.length; i++){
            		// Class active wordt weggehaald
            		sections[i].classList.remove('active');
            	}
            	// Geselecteerde section, schedule, wordt class active aan toegevoegd
            	section.classList.add('active');
            }
            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }
		}
	};

	// Pages
	APP.page = {
		home: function () {
			Transparency.render(qwery('[data-route=home')[0], APP.home);
			APP.router.change();
		},

		schedule: function () {
			Transparency.render(qwery('[data-route=schedule')[0], APP.schedule);
			APP.router.change();
		},

		ranking: function () {
			Transparency.render(qwery('[data-route=ranking')[0], APP.ranking);
			APP.router.change();
		},

		game: function () {
			Transparency.render(qwery('[data-route=game')[0], APP.game);
			APP.router.change();
		},

		movies: function () {
			promise.get('https://api.leaguevine.com/v1/games/?tournament_id=19389&fields=%5Bid%2C%20team_1%2C%20team_1_score%2C%20team_2%2C%20team_2_score%5D').then(function(error, data, xhr) {
		    if (error) {
		      console.log('Error ' + xhr.status);
		      // Stop met de functie
		      return;
		    }

		    var myData = JSON.parse(data).objects;
		
		    console.log(myData);
		    
		    var directives = {
		    	
		    	team1Name: {
		    		text: function(){
		    			return this.team_1.name;
		    		}
		    	},
		    	team2Name: {
		    		text: function(){
		    			return this.team_2.name;
		    		}
		    	}
		    	

		    }
		    

		    



		    Transparency.render(qwery('[data-route=movies')[0], myData, directives);
		    //console.log('The page contains ' + text.length + ' character(s).');
			});
			APP.router.change();
		}
	}
	
	// DOM ready
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});

// Functie voert zichzelf uit tussen de ().	
})();
