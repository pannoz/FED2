// Namespace
var APP = APP || {};

// Self-invoking anomynous function
(function () {
	
	// Data objecten
	APP.home = {
		title:'Welkom',
		description:'Welkom op de applicatie',
		items: [
			{	description: 'De eerste deeltoets is een mondeling over het Javascript skeleton dat je hebt gemaakt tijdens de eerste 3 lessen. De toets wordt in duo\'s afgenomen. Je neemt je eigen werk mee en laat dit zien in een editor en je code staat op Github.'	}, 
			{	description: 'Het mondeling bevat alle onderwerpen zoals die in de eerste 4 lessen zijn behandeld. De vragen tijdens het mondeling gaan over Code structuur, OOP (losse bestanden mag), Classes, Objecten, Functies, Scoping, Events, closure, Prototype, Namespace, Self invoked function, Controller/Flow, Router, Templates.'	}, 
			{	description: 'Je doet ook een Code review tijdens het mondeling: Je krijgt vragen over code van een andere student.'		}
		]
	};

	APP.schedule = {
		title:'Schedule',
		description:'Hieronder ziet u het schema van het toernooi.',
		items: [
			{ date: "Monday, 9:00am", team1: "Chasing", team1Score: "13", team2: "Amsterdam Money Gang", team2Score: "9"},
	  	{ date: "Monday, 9:00am", team1: "Boomsquad", team1Score: "15", team2: "Beast Amsterdam", team2Score: "11"},
	  	{ date: "Monday, 10:00am", team1: "Beast Amsterdam", team1Score: "14", team2: "Amsterdam Money Gang", team2Score: "12"},
	  	{ date: "Monday, 10:00am", team1: "Chasing", team1Score: "5", team2: "Burning Snow", team2Score: "15"},
	  	{ date: "Monday, 11:00am", team1: "Boomsquad", team1Score: "11", team2: "Amsterdam Money Gang", team2Score: "15"},    
	  	{ date: "Monday, 11:00am", team1: "Burning Snow", team1Score: "15", team2: "Beast Amsterdam", team2Score: "6"},
	  	{ date: "Monday, 12:00pm", team1: "Chasing", team1Score: "8", team2: "Beast Amsterdam", team2Score: "15"},
	  	{ date: "Monday, 12:00pm", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"},
	  	{ date: "Monday, 1:00pm", team1: "Chasing", team1Score: "15", team2: "Boomsquad", team2Score: "14"},
	  	{ date: "Monday, 1:00pm", team1: "Burning Snow", team1Score: "15", team2: "Amsterdam Money Gang", team2Score: "11"}
		]
	};

	APP.ranking = {
		title:'Ranking',
		description:'Hieronder ziet u de ranglijst van het tournooi.',
		items: [
			{ team: "Chasing", Win: "2", Lost: "2", Sw: "7", Sl: "9", Pw: "35", Pl: "39"},
    	{ team: "Boomsquad", Win: "2", Lost: "2", Sw: "9", Sl: "8", Pw: "36", Pl: "34"},
    	{ team: "Burning Snow", Win: "3", Lost: "1", Sw: "11", Sl: "4", Pw: "36", Pl: "23"},
    	{ team: "Beast Amsterdam", Win: "2", Lost: "2", Sw: "6", Sl: "8", Pw: "30", Pl: "34"},
    	{ team: "Amsterdam Money Gang", Win: "1", Lost: "3", Sw: "6", Sl: "10", Pw: "30", Pl: "37"}
		]
	};

	APP.game = {
		title:'Game',
		description:'Hieronder ziet u het scoreverloop van een wedstrijd.',
		items: [
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
		]
	};
	
	// Controller Init
	APP.controller = {
		init: function () {
			// Initialize router
			APP.router.init();
		}
	};

	// Router
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
		}
	}
	
	// DOM ready
	domready(function () {
		// Kickstart application
		APP.controller.init();
	});

// Functie voert zichzelf uit tussen de ().	
})();