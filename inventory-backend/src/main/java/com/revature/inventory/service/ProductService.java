package com.revature.inventory.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.inventory.dao.CategoryDao;
import com.revature.inventory.dao.ManufacturerDao;
import com.revature.inventory.dao.ProductDao;
import com.revature.inventory.model.Category;
import com.revature.inventory.model.Manufacturer;
import com.revature.inventory.model.Product;
import com.revature.inventory.viewmodel.ProductViewModel;

@Service
public class ProductService {

	private final ProductDao productDao;
	private final ManufacturerDao manufacturerDao;
	private final CategoryDao categoryDao;
	
	@Autowired
	public ProductService(ProductDao productDao, ManufacturerDao manufacturerDao, CategoryDao categoryDao) {
		super();
		this.productDao = productDao;
		this.manufacturerDao = manufacturerDao;
		this.categoryDao = categoryDao;
	}
	

	public ProductViewModel getProductViewModel(Long id) {
		Product product = productDao.getOne(id);
		return buildProductViewModel(product);
	}
	
	public List<ProductViewModel> getProductViewModel() {
		List<ProductViewModel> pvmList = new ArrayList<>();
		
		List<Product> pList = productDao.findAll();
		for (Product product: pList ) {
			pvmList.add(buildProductViewModel(product));
		}
		
		return pvmList;
	}

//	private Long id;
//	private Long categoryId;
//	private String categoryName;
//	private Long manufacturerId;
//	private String manufacturerName;
//	private String name;
//	private String description;
//	private String model;
//	private String image;
//	private Integer quantity;
//	private BigDecimal unitPrice ;
//	private String color;

	public ProductViewModel addProductViewModel (ProductViewModel pvm) {		
		Product product = new Product();
		product.setCategoryId(pvm.getCategoryId());
		product.setManufacturerId(pvm.getManufacturerId());
		product.setName(pvm.getName());
		product.setDescription(pvm.getDescription());
		product.setModel(pvm.getModel());
		product.setImage(pvm.getImage());
		product.setQuantity(pvm.getQuantity());
		product.setUnitPrice(pvm.getUnitPrice());
		product.setColor(pvm.getColor());
		
		// Saving this to itself will include the newly generated product id;
		product = productDao.save(product);
		
		return buildProductViewModel(product);
	}
	
	public ProductViewModel updateProductViewModel (ProductViewModel pvm) {
		Product product = new Product();

		product.setId(pvm.getId());
		product.setCategoryId(pvm.getCategoryId());
		product.setManufacturerId(pvm.getManufacturerId());
		product.setName(pvm.getName());
		product.setDescription(pvm.getDescription());
		product.setModel(pvm.getModel());
		product.setImage(pvm.getImage());
		product.setQuantity(pvm.getQuantity());
		product.setUnitPrice(pvm.getUnitPrice());
		product.setColor(pvm.getColor());
		
		product = productDao.save(product);
		
		return buildProductViewModel(product);

	}
	

	public void deleteProductViewModel (Long id) {
		 productDao.deleteById(id);
	}

	// helper method
	public ProductViewModel buildProductViewModel(Product product) {
	
        // Assemble the ProductViewModel
        ProductViewModel pvm = new ProductViewModel();

        
//    	private Long id;
//    	private Long categoryId;
//    	private String categoryName;
//    	private Long manufacturerId;
//    	private String manufacturerName;
//    	private String name;
//    	private String description;
//    	private String model;
//    	private String image;
//    	private Integer quantity;
//    	private BigDecimal unitPrice ;
//    	private String color;

        
        pvm.setId(product.getId());
        pvm.setCategoryId(product.getCategoryId());
        
        Category category = categoryDao.getOne(product.getCategoryId());
        pvm.setCategoryName(category.getName());
        
        pvm.setManufacturerId(product.getManufacturerId());
        Manufacturer manufacturer = manufacturerDao.getOne(product.getManufacturerId());
        pvm.setManufacturerName(manufacturer.getName());

        pvm.setName(product.getName());
        pvm.setDescription(product.getDescription());
        pvm.setModel(product.getModel());
        pvm.setImage(product.getImage());
        pvm.setQuantity(product.getQuantity());
        pvm.setUnitPrice(product.getUnitPrice());
        pvm.setColor(product.getColor());

        // Return the ProductViewModel
        return pvm;
	}

}
