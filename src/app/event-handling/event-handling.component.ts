import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.css'],
})
export class EventHandlingComponent implements OnInit {
  message: string = 'Hello!';
  constructor() {}

  ngOnInit(): void {}

  doSomething() {
    alert('Button clicked');
  }

  doSomethingElse(msg: string) {
    alert(msg);
  }
}
