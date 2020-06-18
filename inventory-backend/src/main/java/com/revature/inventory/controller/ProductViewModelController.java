package com.revature.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.inventory.model.Product;
import com.revature.inventory.service.ProductService;
import com.revature.inventory.viewmodel.ProductViewModel;

@CrossOrigin
@RestController
public class ProductViewModelController {
	
	private final ProductService productService;
	
	@Autowired	
	public ProductViewModelController(ProductService productService) {
		super();
		this.productService = productService;
	}

	@GetMapping("/product-view/{id}")
	public ProductViewModel getProductViewById(@PathVariable Long id) {
		return productService.getProductViewModel(id);
	}

	@GetMapping("/product-view")
	public List<ProductViewModel> getAllProductView() {
		return productService.getProductViewModel();
	}

	@PostMapping("/product-view")
	public ProductViewModel createProductView(@RequestBody ProductViewModel pvm) {
		return productService.addProductViewModel(pvm);
	}


	@PutMapping("/product-view")
	public ProductViewModel updateProductViewModel(@RequestBody ProductViewModel pvm) {
		return productService.updateProductViewModel(pvm);
	}

	@DeleteMapping("/product-view/{id}")
	public void deleteProductById(@PathVariable Long id) {
		productService.deleteProductViewModel(id);
	}


}
