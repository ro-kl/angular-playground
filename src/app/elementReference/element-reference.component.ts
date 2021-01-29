import { Component, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-element-reference',
  templateUrl: './element-reference.component.html',
  styleUrls: ['./element-reference.component.css']
})
export class ElementReferenceComponent {
  @ViewChild('ourElement') ourElement: ElementRef;
  @ContentChild('parentElement') parentElement: ElementRef;

  constructor() {
    setTimeout(() => {
      this.ourElement.nativeElement.value = 'our element';
      this.parentElement.nativeElement.innerText = 'parent element';
    }, 1000);
  }
}
