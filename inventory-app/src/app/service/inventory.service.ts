import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product/product';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class InventoryService {

	baseUrl = "http://localhost:8989/";

	constructor(private http: HttpClient) { }

	addProduct(product: Product): Observable<Product> {
		return this.http.post<Product>(this.baseUrl, product);
	}

	getAllProducts(): Observable<Product> {
		return this.http.get<Product>(this.baseUrl);
	}

	getProductById(id: number): Observable<Product> {
		return this.http.get<Product>(this.baseUrl + "product/" + id); // http://localhost:8989/product/{id}
	}

	deleteProduct() {

	}
}
