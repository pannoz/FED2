/**
 *	Create constructor object in global scope
 *
 */

function Alien(name) {
	this.name = name;
}
	Alien.prototype.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}

var rob = new Alien('Robert Rock');

rob.speak();


/**
 *	Create local scope with self invoking function
 *
 */
(function () {
	function Alien(name) {
		this.name = name;
	}
	
	Alien.prototype.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}
	
	var roberta = new Alien("Roberta Rock");
	var breakpoint = 'let\'s stop the application here';
	
	roberta.speak();
})();



/**
 *	Create constructor object in global scope
 *
 */

function Persoon(name, klas) {
	this.name = name;
	this.klas = klas;
}
	Persoon.prototype.speak = function () {
		console.log('Hoi, mijn naam is ' + this.name + ' en ik zit in klas ' + this.klas + '.');
	}

var student_500638003 = new Persoon('Mark Haveman','v202');
student_500638003.speak();

/**
 *	Create local scope with self invoking function
 *
 */
(function () {
	function Persoon(name, klas) {
		this.name = name;
		this.klas = klas;
	}
	
	Persoon.prototype.speak = function () {
		console.log('Hoi, mijn naam is ' + this.name + ' en ik zit in klas ' + this.klas + '.');
	}
	
	var student_500524026 = new Persoon('Lars Hisken','v202');
	var breakpoint = 'let\'s stop the application here';
	
	student_500524026.speak();
})();