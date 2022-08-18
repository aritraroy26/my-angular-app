import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter-button-page',
  templateUrl: './counter-button-page.component.html',
  styleUrls: ['./counter-button-page.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CounterButtonPageComponent implements OnInit {
  count: number = 0;
  threshold: number = 10;
  showCounterButton: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  incrementCount(): void {
    this.count++;
    if (this.count > this.threshold + 5)
      this.router.navigateByUrl('/multiple-choice');
  }

  toggleCounterButton(): void {
    this.showCounterButton = !this.showCounterButton;
  }
}
