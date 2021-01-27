import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  aSimpleString: String = "I'm a simple string";
  attachClass: Boolean = true;

  constructor() {
    setTimeout(() => {
      this.aSimpleString = "I'm another string";
      this.attachClass = false;
    }, 2500);
  }
}
