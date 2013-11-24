// Namespace
var APP = APP || {};

// Anonymous self invoking function
(function () {
	
	// Ivm parsen naar JSON zonder library
	"use strict";
	
	// Data objecten
	APP.schedule = {
		title:'Schedule',
		description:'Hieronder ziet u het schema van het toernooi.',
	};

	APP.ranking = {
		title:'Ranking',
		description:'Below you the ranking of pool D.',
	};

	APP.game = {
		title:'Games',
		description:'Below you see the games played so far. To edit te score press on it.',
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
			    '/game/:id': function(id) {
			    	APP.page.game(id);
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
			//https://api.leaguevine.com/v1/pools/19222/
			//https://api.leaguevine.com/v1/pools/?tournament_id=19389&fields=%5Bname%2C%20start_time%2C%20standings%5D
			promise.get('https://api.leaguevine.com/v1/pools/19222/').then(function(error, data, xhr) {
		    if (error) {
		      console.log('Error ' + xhr.status);
		      // Stop met de functie
		      return;
		    }

		    var myData = JSON.parse(data).standings;
		    console.log(myData);
		    
		    var directives = {
		    	
		    	teamName: {	text: function(){ return this.team.name; }},
		    	poolName: {	text: function(){ return this.team.name; }},
		






		    }

	
		    //console.log(poolName);

		    Transparency.render(qwery('[data-bind=rankingObjects')[0], myData, directives);
		    //console.log('The page contains ' + text.length + ' character(s).');
			});
			Transparency.render(qwery('[data-route=ranking')[0], APP.ranking);
			APP.router.change();
		},

		game: function (id) {
			promise.get('https://api.leaguevine.com/v1/games/' + id + '/').then(function(error, data, xhr) {
		    if (error) {
		      console.log('Error ' + xhr.status);
		      // Stop met de functie
		      return;
		    }
		    console.log('Yihaa',JSON.parse(data));





		    var myData = JSON.parse(data).objects;
		
		    console.log(myData);
		    
		    var directives = {
		    	
		    	gameID: {
		    		href: function(params){
		    			return "/game/" + this.id;
		    		}
		    	},
		    	team1Name: {
		    		text: function(){
		    			console.log(this.team_1.name);
		    			return this.team_1.name;
		    		}
		    	},
		    	team2Name: {
		    		text: function(){
		    			return this.team_2.name;
		    		}
		    	},
		    }

		    Transparency.render(qwery('[data-bind=gameObjects')[0], myData, directives);
		    //console.log('The page contains ' + text.length + ' character(s).');
			});
			Transparency.render(qwery('[data-route=game')[0], APP.game);
			APP.router.change();
		}

	}


/*
	APP.post = {
		score: function(id, team_1_score, team_2_score) {
			promise.post(url).then(function(error, data, xhr) {
				var data = {			
					"game_id": id,
			    "team_1_score": team_1_score,
			    "team_2_score": team_2_score,
			    "is_final": "True"
			  }


				xhr.setRequestHeader("Authorization","bearer 82996312dc");

			}
		}
		
	}
*/
	
	// DOM ready
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});

// Functie voert zichzelf uit tussen de ().	
})();