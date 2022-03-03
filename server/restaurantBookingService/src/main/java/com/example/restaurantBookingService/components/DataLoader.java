package com.example.restaurantBookingService.components;

import com.example.restaurantBookingService.models.Booking;
import com.example.restaurantBookingService.models.Customer;
import com.example.restaurantBookingService.models.RestaurantTable;
import com.example.restaurantBookingService.repositories.BookingRepository;
import com.example.restaurantBookingService.repositories.CustomerRepository;
import com.example.restaurantBookingService.repositories.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    RestaurantTableRepository restaurantTableRepository;

    public void run(ApplicationArguments args) throws Exception {

        Customer customer = new Customer("Joe Bloogs", "012345678", "joe@gmail.com");
        customerRepository.save(customer);

        Customer customer1 = new Customer("Arya James", "o76658943", "Arya@gmail.com");
        customer1.setLoyaltyCard("036758");
        customerRepository.save(customer1);

        Customer customer2 = new Customer(" Oliver Jack ", "076884371", "Oliver@gmail.com");
        customerRepository.save(customer2);

        Customer customer4 = new Customer("Charlie William", "07666218766", "Charlie@gmail.com");
        customer4.setLoyaltyCard("998763");
        customerRepository.save(customer4);

        Customer customer5 = new Customer("Daniel Thomas", "078843270", "Daniel@gmail.com");
        customer5.setLoyaltyCard("765832");
        customerRepository.save(customer5);

        RestaurantTable table1 = new RestaurantTable(4);
        restaurantTableRepository.save(table1);

        RestaurantTable table2 = new RestaurantTable(6);
        restaurantTableRepository.save(table2);

        RestaurantTable table3 = new RestaurantTable(10);
        restaurantTableRepository.save(table3);

        RestaurantTable table4 = new RestaurantTable(3);
        restaurantTableRepository.save(table4);

        LocalDateTime startTime = LocalDateTime.parse("2022-03-01T19:00:00.000000");
        LocalDateTime endTime = LocalDateTime.parse("2022-03-01T20:00:00.000000");
        ArrayList<RestaurantTable> restaurantTables = new ArrayList<>();
        restaurantTables.add(table1);
        restaurantTables.add(table4);
        Booking booking = new Booking(customer1, startTime , endTime , 7, restaurantTables, "");
        bookingRepository.save(booking);



        LocalDateTime startTime1 = LocalDateTime.parse("2022-03-01T21:00:00.000000");
        LocalDateTime endTime1 = LocalDateTime.parse("2022-03-01T22:00:00.000000");
        ArrayList<RestaurantTable> restaurantTables1 = new ArrayList<>();
        restaurantTables1.add(table2);
        Booking booking1 = new Booking(customer2, startTime1 , endTime1 , 4, restaurantTables1, "Peanut and severe  Egg Allergy");
        bookingRepository.save(booking1);

        LocalDateTime startTime2 = LocalDateTime.parse("2022-03-02T16:00:00.000000");
        LocalDateTime endTime2 = LocalDateTime.parse("2022-03-02T18:00:00.000000");
        ArrayList<RestaurantTable> restaurantTables2 = new ArrayList<>();
        restaurantTables2.add(table3);
        Booking booking2 = new Booking(customer4, startTime2 , endTime2 , 10, restaurantTables2, "");
        bookingRepository.save(booking2);

        LocalDateTime startTime3 = LocalDateTime.parse("2022-03-01T16:00:00.000000");
        LocalDateTime endTime3 = LocalDateTime.parse("2022-03-01T18:00:00.000000");
        ArrayList<RestaurantTable> restaurantTables3 = new ArrayList<>();
        restaurantTables3.add(table3);
        Booking booking3 = new Booking(customer4, startTime3 , endTime3 , 4, restaurantTables3, "");
        bookingRepository.save(booking3);

        LocalDateTime startTime4 = LocalDateTime.parse("2022-03-01T19:00:00.000000");
        LocalDateTime endTime4 = LocalDateTime.parse("2022-03-01T20:00:00.000000");
        ArrayList<RestaurantTable> restaurantTables4 = new ArrayList<>();
        restaurantTables.add(table1);
        restaurantTables.add(table4);
        Booking booking4 = new Booking(customer4, startTime4 , endTime4 , 7, restaurantTables4, "");
        bookingRepository.save(booking4);

        LocalDateTime startTime5 = LocalDateTime.parse("2022-03-01T19:00:00.000000");
        LocalDateTime endTime5 = LocalDateTime.parse("2022-03-01T20:00:00.000000");
        ArrayList<RestaurantTable> restaurantTables5 = new ArrayList<>();
        restaurantTables.add(table1);
        restaurantTables.add(table4);
        Booking booking5 = new Booking(customer4, startTime5 , endTime5 , 7, restaurantTables5, "");
        bookingRepository.save(booking5);
    }
}
