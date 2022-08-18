import { Component, Input, OnInit } from '@angular/core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tip-section',
  templateUrl: './tip-section.component.html',
  styleUrls: ['./tip-section.component.css'],
})
export class TipSectionComponent implements OnInit {
  exclamationPointIcon = faExclamationCircle;
  @Input() content: string = '';
  constructor() {}

  ngOnInit(): void {}
}
