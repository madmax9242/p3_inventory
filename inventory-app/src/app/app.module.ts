import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { InventoryviewComponent } from './inventoryview/inventoryview.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';
import { SortableDirective } from './directives/sortable.directive';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AdminviewComponent,
    InventoryviewComponent,
    InventoryItemComponent,
    SortableDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [HttpClientModule, DecimalPipe, NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule { }
