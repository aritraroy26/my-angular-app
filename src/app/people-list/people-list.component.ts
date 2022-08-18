import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  // we can multiple style urls like below
  // styleUrls: ['./people-list.component.css','./other-style.css'],
})
export class PeopleListComponent implements OnInit {
  showList: boolean = true;
  people = [
    {
      name: 'Aritra',
      age: 31,
      hairColor: 'Black',
    },
    {
      name: 'Samir',
      age: 67,
      hairColor: 'Grey',
    },
    {
      name: 'Aparna',
      age: 56,
      hairColor: 'Brown',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
