import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extended-data-binding',
  templateUrl: './extended-data-binding.component.html',
  styleUrls: ['./extended-data-binding.component.css']
})
export class ExtendedDataBindingComponent {
  @Input() name: string;

}
