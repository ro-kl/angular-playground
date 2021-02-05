import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memoryPipe'
})
export class MemoryPipePipe implements PipeTransform {
  transform(memory: number): string {
    const memorySize: Array<string> = [
      'KB', 'MB', 'GB', 'TB', 'PB'
    ];

    let newMemory = memory;
    let index = 0;

    while(newMemory / 1000 >= 1 && index < memorySize.length) {
      newMemory = newMemory / 1000;
      index++;
    };

    return `${newMemory.toFixed(2)}${memorySize[index]}`;
  }
}
