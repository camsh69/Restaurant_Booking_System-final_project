package com.example.restaurantBookingService;

import com.example.restaurantBookingService.models.Booking;
import com.example.restaurantBookingService.models.Customer;
import com.example.restaurantBookingService.models.LoyaltyCard;
import com.example.restaurantBookingService.models.RestaurantTable;
import com.example.restaurantBookingService.repositories.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
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

	@Test
	public void canCreateBooking() {
		Customer customer = new Customer("Joe Bloggs", "012345678", "joe@gmail.com");
		customerRepository.save(customer);
		RestaurantTable table3 = new RestaurantTable(4);
		restaurantTableRepository.save(table3);
		RestaurantTable table4 = new RestaurantTable(6);
		restaurantTableRepository.save(table4);
		LocalDateTime startTime = LocalDateTime.parse("2022-03-01T19:00:00.000000");
		LocalDateTime endTime = LocalDateTime.parse("2022-03-01T21:00:00.000000");
		ArrayList<RestaurantTable> restaurantTables = new ArrayList<>();
		restaurantTables.add(table3);
		restaurantTables.add(table4);
		Booking booking1 = new Booking(customer, startTime , endTime , 4, restaurantTables, "No peanuts");
		bookingRepository.save(booking1);
//		booking1.addRestaurantTables(table1);
	}

}
