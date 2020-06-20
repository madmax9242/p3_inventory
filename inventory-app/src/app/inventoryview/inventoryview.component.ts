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

	// products: Product[];

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

	open(product) {
		const modalRef = this.modalService.open(InventoryItemComponent);
		modalRef.componentInstance.product = product;
		// this.modalService
		// 	.open(itemModal, { ariaLabelledBy: 'modal-basic-title' })
		// 	.result.then(
		// 		(result) => {
		// 			this.closeResult = `Closed with: ${result}`;
		// 		},
		// 		(reason) => {
		// 			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		// 		}
		// 	);
	}

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach(header => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}

	ngOnInit(): void {
		// this.inventoryService
		// 	.getAllProducts()
		// 	.subscribe((data) => {
		// 		this.products = data;
		// 	});
	}

	deleteItem(product: Product) {
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

	updateItem(product: Product) {
		console.log(product);
		// this.inventoryService
		// 	.updateProduct(product)
		// 	.subscribe((res) => console.log(res));
	}

	getAllProducts() {
		this.inventoryService.getAllProducts()
			.subscribe(result => {
				console.log(result);
				this.service.setInventory(result);
				this.products$ = this.service.products$;
				this.total$ = this.service.total$;
			})
	}

	receiveUpdate($event) {
		this.updateItem($event);
	}

	receiveDelete($event) {
		this.deleteItem($event); // Event is a product
	}
}
