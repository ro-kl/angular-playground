import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OtherComponent } from './componentHandling/other/other.component';
import { AnotherComponent } from './componentHandling/another/another.component';
import { DataBindingComponent } from './dataBinding/simpleDataBinding/data-binding.component';
import { ExtendedDataBindingComponent } from './dataBinding/extendedDataBinding/extended-data-binding.component';
import { EventBindingComponent } from './dataBinding/eventBinding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DataBindingComponent,
    ExtendedDataBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
