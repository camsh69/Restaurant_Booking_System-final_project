package com.example.restaurantBookingService;

import com.example.restaurantBookingService.models.Customer;
import com.example.restaurantBookingService.models.LoyaltyCard;
import com.example.restaurantBookingService.repositories.CustomerRepository;
import com.example.restaurantBookingService.repositories.LoyaltyCardRepository;
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

	@Test
	void contextLoads() {
	}

}
