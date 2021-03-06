import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OtherComponent } from './componentHandling/other/other.component';
import { AnotherComponent } from './componentHandling/another/another.component';
import { DataBindingComponent } from './dataBinding/simpleDataBinding/data-binding.component';
import { ExtendedDataBindingComponent } from './dataBinding/extendedDataBinding/extended-data-binding.component';
import { EventBindingComponent } from './dataBinding/eventBinding/event-binding.component';
import { ElementReferenceComponent } from './elementReference/element-reference.component';
import { MemoryPipePipe } from './shared/memory-pipe.pipe';
import { PipePlaygroundComponent } from './pipes/pipe-playground/pipe-playground.component';
import { CurrencyPipePipe } from './shared/currency-pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DataBindingComponent,
    ExtendedDataBindingComponent,
    EventBindingComponent,
    ElementReferenceComponent,
    MemoryPipePipe,
    PipePlaygroundComponent,
    CurrencyPipePipe
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
