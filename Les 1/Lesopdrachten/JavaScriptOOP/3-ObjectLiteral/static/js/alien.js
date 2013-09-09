/**
 *	Object literal
 *	
 *
 */

var alien = {
	name: 'Robert Rock',
	
	speak: function () {
		console.log('Hi, my name is ' + this.name);

		// console.log("This is:" + this.constructor);
	}
}

alien.speak();


var student_500638003 = {
	name:  'Mark Haveman',
	klas:  'v202',
	eat:   'banaan',
	walk:  '10',

	speak: function () {
		console.log(
			'Hoi, mijn naam is ' + this.name + ' en ik zit in klas ' + this.klas + '. Ik eet graag een ' + this.eat + ', wat ik er in ' + this.walk + ' minuten weer af loop.')
	}
}

student_500638003.speak();