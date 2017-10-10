import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

	list = [
		{"name": "dog", "species": "dog", "dateOfBirth": "18.07.2011."},
		{"name": "piggeon", "species": "bird", "dateOfBirth": "25.07.2011."},
		{"name": "tunfish", "species": "fish", "dateOfBirth": "18.09.2015."},
		{"name": "raven", "species": "bird", "dateOfBirth": "14.01.2014."}
		
	]

  constructor() {

  }

  ngOnInit() {
  }

}