import { Component, OnInit } from '@angular/core';
import { Product } from '../class/product/product';
import { InventoryService } from '../service/inventory.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

declare var $: any;

@Component({
	selector: 'app-inventoryview',
	templateUrl: './inventoryview.component.html',
	styleUrls: ['./inventoryview.component.css'],
})
export class InventoryviewComponent implements OnInit {
	products: Product[];

	constructor(
		private inventoryService: InventoryService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.inventoryService
			.getAllProducts()
			.subscribe((data) => (this.products = data));
	}

	deleteItem(product: Product) {
		console.log('deleteItem() clicked.');
		console.log("Indicex's ID: " + product.id);

		this.inventoryService
			.deleteProductById(product.id)
			.subscribe(() => this.getAllProducts());
	}

	updateItem(product: Product) {
		this.inventoryService
			.updateProduct(product)
			.subscribe((res) => console.log(res));
	}

	getAllProducts() {
		this.inventoryService
			.getAllProducts()
			.subscribe((data) => (this.products = data));
	}

	receiveUpdate($event) {
		this.updateItem($event);
	}

	receiveDelete($event) {
		this.deleteItem($event); // Event is a product
	}
}
