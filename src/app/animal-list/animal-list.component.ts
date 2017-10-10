import { Component, OnInit } from '@angular/core';
import { Animal } from './classAnimal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

	// list = [
	// 	{"name": "dog", "species": "dog", "dateOfBirth": "18.07.2011."},
	// 	{"name": "piggeon", "species": "bird", "dateOfBirth": "25.07.2011."},
	// 	{"name": "tunfish", "species": "fish", "dateOfBirth": "18.09.2015."},
	// 	{"name": "raven", "species": "bird", "dateOfBirth": ""}
		
	// ]

	list:Array<Animal> = [
		new Animal('dog', 'dog', '18.07.2011.'),
		new Animal('pigeon', 'bird', '25.07.2011.'),
		new Animal('tuna', 'fish', '18.09.2015.'),
		new Animal('raven', 'bird', '')

	]


	// let dog = new Animal;
	// dog.name = 'dog'
	// dog.species = 'dog'
	// dog.dateOfBirth = 

	// let pigeon = new Animal;
	// pigeon.name = 'pigeon'
	// pigeon.species = 'bird'
	// pigeon.dateOfBirth = '25.07.2011.'

	// let tuna = new Animal;
	// tuna.name = 'tuna'
	// tuna.species = 'fish'
	// tuna.dateOfBirth = '18.09.2015.'

	// let raven = new Animal;
	// raven.name = 'raven'
	// raven.species = 'bird'
	// raven.dateOfBirth = '18.09.2015.'


  constructor() {

  }

  ngOnInit() {
  }

  remove(index){
  	this.list.splice(index);
  }

  moveToTop(index){
  	let arrayOfObjects = this.list.splice(index);
  	this.list.unshift(arrayOfObjects[0]);
  }

}
