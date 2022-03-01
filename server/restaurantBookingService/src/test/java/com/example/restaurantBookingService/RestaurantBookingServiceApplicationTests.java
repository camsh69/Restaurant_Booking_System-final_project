package com.example.restaurantBookingService;

import com.example.restaurantBookingService.models.Customer;
import com.example.restaurantBookingService.models.LoyaltyCard;
import com.example.restaurantBookingService.models.RestaurantTable;
import com.example.restaurantBookingService.repositories.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.concurrent.Callable;

@SpringBootTest
class RestaurantBookingServiceApplicationTests {

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	LoyaltyCardRepository loyaltyCardRepository;

	@Autowired
	BookingRepository bookingRepository;

	@Autowired
	RestaurantTableRepository restaurantTableRepository;

	@Autowired
	ReceiptRepository receiptRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canCreateCustomer() {
		Customer customer = new Customer("Joe Bloogs", "012345678", "joe@gmail.com");
		customerRepository.save(customer);
	}

	@Test
	public void canCreateTable() {
		RestaurantTable table1 = new RestaurantTable(4);
		restaurantTableRepository.save(table1);
		RestaurantTable table2 = new RestaurantTable(6);
		restaurantTableRepository.save(table2);
	}

}
