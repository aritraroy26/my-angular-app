import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params-example',
  templateUrl: './params-example.component.html',
  styleUrls: ['./params-example.component.css'],
})
export class ParamsExampleComponent implements OnInit {
  urlParam: string = '';
  secondParam: string = '';
  params: any[] = [];
  constructor(private activatedRoute: ActivatedRoute) {
    this.urlParam = this.activatedRoute.snapshot.paramMap.get('urlParam') || '';
    this.secondParam =
      activatedRoute.snapshot.paramMap.get('secondParam') || '';
    this.activatedRoute.queryParams.subscribe((params) => {
      this.params = Object.keys(params).map((key) => ({
        name: key,
        value: params[key],
      }));
    });
  }

  ngOnInit(): void {}
}
