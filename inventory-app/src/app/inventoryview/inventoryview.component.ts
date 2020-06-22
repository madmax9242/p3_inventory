import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Product } from '../class/product/product';
import { InventoryService } from '../service/inventory.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SortableDirective, SortEvent } from '../directives/sortable.directive';
import { ServiceService } from '../service/service.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InventoryItemComponent } from '../inventory-item/inventory-item.component';

@Component({
	selector: 'app-inventoryview',
	templateUrl: './inventoryview.component.html',
	styleUrls: ['./inventoryview.component.css'],
})
export class InventoryviewComponent implements OnInit {

	// Change application view (admin/customer)
	userType: string = "admin";

	products$: Observable<Product[]>;
	total$: Observable<number>;

	@ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

	constructor(
		private inventoryService: InventoryService,
		private router: Router,
		public service: ServiceService,
		private modalService: NgbModal,
	) {
		this.getAllProducts();
	}

	ngOnInit(): void {
	}

	// FOR ADMIN
	open(product) {
		console.log("open() called.");

		const modalRef = this.modalService.open(InventoryItemComponent);
		modalRef.componentInstance.product = product;

		modalRef.componentInstance.userType = this.userType;

	}

	// FOR CUSTOMER
	addToCart(product) {
		console.log("addToCart() called.");
		console.log(product);

		// TODO: ADD TO CART, SOMEHOW
	}

	updateItem(product: Product) {
		console.log("updateItem() called.");

		console.log(product);
	}

	deleteItem(product: Product) {
		console.log("deleteItem() called.");

		this.inventoryService
			.deleteProductById(product.id)
			.subscribe((result) => {
				if (!result) {
					this.getAllProducts();
				} else {
					console.log('show something');
				}

			});
	}

	getAllProducts() {
		console.log("getAllProducts() called.");

		this.inventoryService.getAllProducts()
			.subscribe(result => {
				console.log(result);
				this.service.setInventory(result);
				this.products$ = this.service.products$;
				this.total$ = this.service.total$;
			})
	}

	onSort({ column, direction }: SortEvent) {
		// Resetting other headers
		this.headers.forEach(header => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}

	receiveUpdate($event) {
		this.updateItem($event);
	}

	receiveDelete($event) {
		this.deleteItem($event);
	}
}
