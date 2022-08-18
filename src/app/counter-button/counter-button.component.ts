import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CounterButtonComponent implements OnInit {
  count: number = 0;
  pointerIcon = faHandPointer;
  @Input() parentCount: number = 0;
  @Output() buttonClicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  incrementCount(): void {
    if (this.count < 10) this.count++;
    this.buttonClicked.emit();
  }
}
