import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-playground',
  templateUrl: './pipe-playground.component.html',
  styleUrls: ['./pipe-playground.component.css']
})
export class PipePlaygroundComponent {
  memoryData: Array<number> = [
    5003,
    24235464656456,
    10000001,
    12233333232,
    10234,
    2365443,
    99123499999,
  ];
  currencyData: Array<any> = [
    [1.00, 'USD'],
    [1.00, 'GBP'],
    [1.00, 'EUR'],
    [5.01, 'YPN'],
    [2.45, 'GBP'],
    [10.23, 'EUR'],
    [0.01, 'USD'],
    [-10.00, 'EUR']

  ];
}
