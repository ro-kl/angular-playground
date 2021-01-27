import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();

  onClick() {
    this.clicked.emit('we changed the string');
  }
}
