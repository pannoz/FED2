// Namespace
var APP = APP || {};

// Anonymous self invoking function
(function () {

	// Ivm parsen naar JSON zonder library
	"use strict";
	
	// Data objecten
	APP.schedule = {
		title:'Schedule',
		description:'Below you see the played games or the games that still have to be played. Press the edit button to adjust the score.',
	};

	APP.ranking = {
		title:'Ranking',
		description:'Below you the ranking of pool D.',
	};

	APP.game = {
		title:'Game',
		description:'Below you see the selected game, here you can adjust and save the score.',
	};

  APP.post = {
		name: "Post succes"
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
			    	APP.page.schedule();
			    }
			});
		},

		change: function () {
			// Route = #/schedule - 2 karakters = schedule
      // var route = window.location.hash.slice(2),
      var route = window.location.hash.split('/')[1],
      		// Zoekt alle sections met een data-route
          sections = qwery('section[data-route]'),
          // Section = data-route='schedule' eerste selecteren
          section = qwery('[data-route=' + route + ']')[0];
          // section = qwery('[data-route=' + route + '/' + id + ']')[0];  
          console.log('Loading ' + window.location.hash.slice(2) + ' data..');
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
		schedule: function () {
			
			document.getElementById('postMessage').style.display = 'none';

			promise.get('https://api.leaguevine.com/v1/games/?tournament_id=19389&order_by=%5Bstart_time%5D&fields=%5Bid%2C%20team_1%2C%20team_2%2C%20start_time%2C%20team_1_score%2C%20team_2_score%5D&access_token=d6fb6c85cb/').then(function(error, data, xhr) {
		    if (error) {
		      console.log('Error ' + xhr.status);
		      return;
		    }
		    console.log ('Loading data complete!')
		    var myData = JSON.parse(data).objects;
		    var directives = {
		    	gameID: {
		    		href: function(params){
		    			return "#/game/" + this.id;
		    			//return window.location.hash = 'something';
		    			//return window.location = "/game/" + this.id;
		    		}
		    	},
		    	team1Name: { 
		    		text: function(){
		    			return this.team_1.name;
		    		}
		    	},
		    	team2Name: {	
		    		text: function(){
		    			return this.team_2.name;
		    		}
		    	},
		    	startTime: {
						text: function() {
							var date = this.start_time.split(/[T:]/);
							return 'October 21, at ' + date[1] + ':' + date[2];
						}
					},
		    }
		    Transparency.render(qwery('[data-bind=scheduleObjects')[0], myData, directives);
			});
			Transparency.render(qwery('[data-route=schedule')[0], APP.schedule);
			APP.router.change();
		},

		ranking: function () {
			
			document.getElementById('postMessage').style.display = 'none';

			promise.get('https://api.leaguevine.com/v1/pools/19222/').then(function(error, data, xhr) {
		    if (error) {
		      console.log('Error ' + xhr.status);
		      // Stop met de functie
		      return;
		    }
 				console.log ('Loading data complete!')
		    var myData = JSON.parse(data).standings;
		    var directives = {
		    	teamName: {	
		    		text: function(){ 
		    			return this.team.name; 
		    		}
		    	},
		    }
		    Transparency.render(qwery('[data-bind=rankingObjects')[0], myData, directives);
			});
			Transparency.render(qwery('[data-route=ranking')[0], APP.ranking);
			APP.router.change();
		},

		game: function (id) {

			promise.get('https://api.leaguevine.com/v1/games/' + id + '/').then(function(error, data, xhr) {
		    if (error) {
		      console.log('Error ' + xhr.status);
		      return;
		    }
		    var myData = JSON.parse(data);
		    
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
		    	},
		    	postID: {
            onclick: function(params) {
              return "APP.page.post(" + this.id + ", " + this.team_1_score + ", " + this.team_2_score + ", true);";
            }
          }
		    }
		    Transparency.render(qwery('[data-bind=gameObjects')[0], myData, directives);
			});
			// Achter game moet een id komen, dan werkt het!
			Transparency.render(qwery('[data-route=game')[0], APP.game);
			APP.router.change("game");
		},

		post: function (id) {
			
			document.getElementById('postMessage').style.display = 'block';
			
			// var timeInterval = setInterval(function(){
			// 	document.getElementById('postMessage').style.display = 'none'
			// },2500);
			
			var params = {
		    	"game_id" 			: id,
		    	"team_1_score" 	: document.getElementById('team1Score').value,
		    	"team_2_score" 	: document.getElementById('team2Score').value,
		    	"is_final" 			: "true"
		  };

		  params = JSON.stringify(params);
		  console.log(params);
			
			var type 			=  'POST',
        	url  			=  'https://api.leaguevine.com/v1/game_scores/',
          postData 	= 	params;

      // Create request
      var xhr = new XMLHttpRequest();
      // Open request
      xhr.open(type,url,true);
      // Set request headers
      xhr.setRequestHeader('Content-type','application/json');
      xhr.setRequestHeader('Authorization','bearer 82996312dc');
      // Send request (with data as a json string)
      xhr.send(postData);
		},
	}

	// DOM ready
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});

// Functie voert zichzelf uit tussen de ().	
})();