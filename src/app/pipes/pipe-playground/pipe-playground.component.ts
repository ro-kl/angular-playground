import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-playground',
  templateUrl: './pipe-playground.component.html',
  styleUrls: ['./pipe-playground.component.css']
})
export class PipePlaygroundComponent {
  displayedMemoryColumns: string[] = ['memory', 'transformedMemory'];
  displayedCurrencyColumns: string[] = ['currency', 'transformedCurrency'];
  memoryData: Array<any> = [
    { memory: 5003 },
    { memory: 24235464656456 },
    { memory: 10000001 },
    { memory: 10234 },
    { memory: 2365443 },
    { memory: 12233333232 },
    { memory: 99123499999 }
  ];
  currencyData: Array<any> = [
    { amount: 1.00, currency: 'USD'},
    { amount: 1.00, currency: 'EUR'},
    { amount: 5.01, currency: 'YPN'},
    { amount: 2.45, currency: 'GBP'},
    { amount: 10.23, currency: 'EUR'},
    { amount: 0.01, currency: 'USD'},
    { amount: -10.00, currency: 'EUR'},
  ];
}
