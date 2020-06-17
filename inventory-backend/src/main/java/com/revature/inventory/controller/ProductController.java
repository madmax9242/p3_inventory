package com.revature.inventory.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.inventory.dao.ProductDao;
import com.revature.inventory.model.Product;


@RestController
public class ProductController {
	
	private final ProductDao productDao;
	
	
	@Autowired
	public ProductController(ProductDao productDao) {
		super();
		this.productDao = productDao;
	}


	@GetMapping("/product/{id}")
	public Optional<Product> getProductById(@PathVariable Long id) {
		return productDao.findById(id);
	}

	@GetMapping("/product")
	public List<Product> getAllProduct() {
		return productDao.findAll();
	}

	@PostMapping("/product")
	public Product createProductById(@RequestBody Product product) {
		return productDao.save(product);
	}


	@PutMapping("/product")
	public Product updateProduct(@RequestBody Product product) {
		return productDao.save(product);
	}

	@DeleteMapping("/product/{id}")
	public void deleteProductById(@PathVariable Long id) {
		productDao.deleteById(id);
	}


}
