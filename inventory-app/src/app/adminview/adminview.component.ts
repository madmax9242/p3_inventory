import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product/product';
// import { ngForm } from '@angular/forms';

@Component({
	selector: 'app-adminview',
	templateUrl: './adminview.component.html',
	styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {

	product: Product;

	constructor() { }

	ngOnInit(): void {
		this.product = new Product();
	}

	title: "Admin View";

	submitItem() {
		console.log("submitItem() clicked.");

		// Sanity check
		console.log(this.product);

		
	}

}
