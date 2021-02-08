import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {
  transform(currencyAmount: number, currency: string): string {
    const usdCurrencyMapping: Array<any> = [
      ['USD', 1],
      ['EUR', 0.83],
      ['GBP', 0.73],
    ];
    const eurCurrencyMapping: Array<any> = [
      ['USD', 1.19],
      ['EUR', 1],
      ['GBP', 0.87],
    ];
    const gbpCurrencyMapping: Array<any> = [
      ['USD', 1.36],
      ['EUR', 1.14],
      ['GBP', 1],
    ];
    const currencyMapping: Array<any> = [
      ['USD', usdCurrencyMapping],
      ['EUR', eurCurrencyMapping],
      ['GBP', gbpCurrencyMapping]
    ];
    const selectedCurrencyMapping = currencyMapping.filter(foreignCurrency => foreignCurrency[0] === currency);

    let outputString = 'sorry, currency not found';

    if (selectedCurrencyMapping && selectedCurrencyMapping.length > 0) {
      outputString = '';

      selectedCurrencyMapping[0][1].forEach(currency => {
        outputString += `  ${(currencyAmount * currency[1]).toFixed(2)}${currency[0]}  `;
      });
    }

    return outputString;
  }
}
