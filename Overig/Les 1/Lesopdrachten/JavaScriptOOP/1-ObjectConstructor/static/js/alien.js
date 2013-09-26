/**
 *	Object constructor with argument, property & method
 *	
 *  var, this, comment, console (log, command line)
 */


function Alien(name) { 
	this.name = name;
	
	this.speak = function () {
		console.log('Hi, my name is ' + this.name);
	}

	// console.log("This is:" + this.constructor);
}

var rob = new Alien('Robert Rock');

rob.speak();



// Persoon = object constructor, name is de property
function Persoon(name, klas){			
	
  // name = property (eigenschap) van de persoon
  this.name = name;
  // klas = property (eigenschap) van de persoon
  this.klas = klas;
	    

  // Property van de persoon, verwerkt in een functie/methode
	this.speak = function () {	
		console.log('Hoi, mijn naam is ' + this.name + ' en ik zit in klas ' + this.klas + '.')
	}
}

// student is een nieuwe Persoon, genaamd Mark Haveman.
var student_500638003 = new Persoon('Mark Haveman','v202')
student_500638003.speak();
