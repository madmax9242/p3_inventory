import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminviewComponent } from './adminview/adminview.component';
import { InventoryviewComponent } from './inventoryview/inventoryview.component';

const routes: Routes = [
	{ path: 'adminview', component: AdminviewComponent },
	{ path: 'inventoryview', component: InventoryviewComponent }
];

@NgModule({
	declarations: [

	],
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {
}
