package com.example.restaurantBookingService;

import com.example.restaurantBookingService.models.Booking;
import com.example.restaurantBookingService.models.Customer;
import com.example.restaurantBookingService.models.RestaurantTable;
import com.example.restaurantBookingService.repositories.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class RestaurantBookingServiceApplicationTests {

	@Autowired
	CustomerRepository customerRepository;

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
		String startTime = "2022-03-01T19:00:00.000000";
		String endTime = "2022-03-01T21:00:00.000000";
		ArrayList<RestaurantTable> restaurantTables = new ArrayList<>();
		restaurantTables.add(table3);
		restaurantTables.add(table4);
		Booking booking1 = new Booking(customer, startTime , endTime , 4, restaurantTables, "No peanuts");
		bookingRepository.save(booking1);
//		booking1.addRestaurantTables(table1);
	}

	@Test
	public void canAddLoyaltyCardToCustomer(){
		Customer customer = new Customer("Campbell", "012345678", "joe@gmail.com");
		customer.setLoyaltyCard("036758");
		customerRepository.save(customer);
	}

	@Test
	public void canGetListOfCustomersByFrequencyBooking(){
		Customer customer1 = new Customer("Joe Bloogs", "012345678", "joe@gmail.com");
		customerRepository.save(customer1);
		RestaurantTable table1 = new RestaurantTable(4);
		restaurantTableRepository.save(table1);
		RestaurantTable table2 = new RestaurantTable(6);
		restaurantTableRepository.save(table2);
		String startTime = "2022-03-01T19:00:00.000000";
		String endTime = "2022-03-01T21:00:00.000000";
		ArrayList<RestaurantTable> restaurantTables = new ArrayList<>();
		restaurantTables.add(table1);
		restaurantTables.add(table2);
		Booking booking1 = new Booking(customer1, startTime , endTime , 4, restaurantTables, "No peanuts");
		bookingRepository.save(booking1);
		RestaurantTable table3 = new RestaurantTable(4);
		restaurantTableRepository.save(table3);
		RestaurantTable table4 = new RestaurantTable(6);
		restaurantTableRepository.save(table4);

		String startTime1 = "2022-02-01T19:00:00.000000";
		String endTime1 = "2022-04-01T21:00:00.000000";
		ArrayList<RestaurantTable> restaurantTables1 = new ArrayList<>();
		restaurantTables1.add(table3);
		restaurantTables1.add(table4);
		Booking booking2 = new Booking(customer1, startTime1 , endTime1 , 4, restaurantTables1, "No peanuts");
		bookingRepository.save(booking2);

		Customer customer2 = new Customer("Jill", "012345678", "joe@gmail.com");
		customerRepository.save(customer2);
		RestaurantTable table5 = new RestaurantTable(4);
		restaurantTableRepository.save(table5);
		RestaurantTable table6 = new RestaurantTable(6);
		restaurantTableRepository.save(table6);
		String startTime2 = "2022-03-01T19:00:00.000000";
		String endTime2 = "2022-03-01T21:00:00.000000";
		ArrayList<RestaurantTable> restaurantTables3 = new ArrayList<>();
		restaurantTables3.add(table5);
		restaurantTables3.add(table6);
		Booking booking3 = new Booking(customer2, startTime2 , endTime2 , 4, restaurantTables3, "No peanuts");
		bookingRepository.save(booking3);
//		List<Customer> foundCustomer = customerRepository.findAllByBookingsOrderAsc();
//		assertEquals("Joe Bloggs", foundCustomer.get(0).getName());

	}

	@Test
	public void canFindCustomerByLoyaltyCard(){
		List<Customer> foundCustomer = customerRepository.findByLoyaltyCard("036758");
    	assertEquals("Campbell", foundCustomer.get(0).getName());
		assertThat("greater than 0", foundCustomer.size() > 0);
	}


}
