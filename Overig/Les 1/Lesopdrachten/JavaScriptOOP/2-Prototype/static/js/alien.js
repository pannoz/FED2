/**
 *	Object Constructor using 'prototype'
 *	
 *
 */

function Alien(name) {
	this.name = name;
}

Alien.prototype.speak = function () {
	console.log('Hi, my name is ' + this.name);
};

var rob = new Alien('Robert Rock');
var roberta = new Alien('Roberta Rock');

rob.speak();
roberta.speak();



function Persoon(name, klas){			
  this.name = name;
  this.klas = klas;
}

Persoon.prototype.speak = function (){
	console.log('Hoi, mijn naam is ' + this.name + ' en ik zit in klas ' + this.klas + '.')
}

Persoon.prototype.walk = function (){
}

Persoon.prototype.eat = function (){
}

var student_500638003 = new Persoon('Mark Haveman','v202')
var student_500524026 = new Persoon('Lars Hisken','v202')

student_500638003.speak();
student_500524026.speak();