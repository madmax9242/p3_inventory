import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../class/product/product';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../service/service.service';
import { InventoryService } from '../service/inventory.service';

@Component({
	selector: 'app-inventory-item',
	templateUrl: './inventory-item.component.html',
	styleUrls: ['./inventory-item.component.css'],
})
export class InventoryItemComponent implements OnInit {

	@Input() product: Product;

	constructor(
		private modalService: NgbModal,
		public service: ServiceService,
		public activeModal: NgbActiveModal,
		private inventoryService: InventoryService) {
	}

	ngOnInit(): void { }

	updateItem() {
		// TODO: BACKEND VALIDATION; MAKE SURE UPDATED FIELDS ARE VALID
		this.inventoryService
			.updateProduct(this.product)
			.subscribe((res) => {
				if (res) {
					this.inventoryService.getAllProducts()
						.subscribe(inventory => {
							this.service.setInventory(inventory);
							this.modalService.dismissAll();
						})
				}
			});
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
