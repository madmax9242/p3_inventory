package com.revature.inventory.controller;

import com.revature.inventory.model.Product;
import org.junit.After;
import org.junit.Before;

public class ProductControllerTest {

	Product product = new Product(1L, "test", "test", "test", "test", "test", "test", 6, 100, "white");

	@Before
	public static void before() {
		System.out.println("Preparing tests");
	}

	@After
	public static void after() {
		System.out.println("All tests complete");
	}

}
