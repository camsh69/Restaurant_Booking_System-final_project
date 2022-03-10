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

        RestaurantTable table3 = new RestaurantTable(4);
        restaurantTableRepository.save(table3);

        RestaurantTable table4 = new RestaurantTable(3);
        restaurantTableRepository.save(table4);

        String startTime = "2022-03-03T16:00:00";
        String endTime = "2022-03-03T18:00:00";
        ArrayList<RestaurantTable> restaurantTables = new ArrayList<>();
        restaurantTables.add(table3);
        restaurantTables.add(table4);
        Booking booking = new Booking(customer1, startTime , endTime , 7, restaurantTables, "");
        bookingRepository.save(booking);


        String startTime1 = "2022-03-03T21:00:00";
        String endTime1 = "2022-03-03T22:00:00";
        ArrayList<RestaurantTable> restaurantTables1 = new ArrayList<>();
        restaurantTables1.add(table2);
        Booking booking1 = new Booking(customer2, startTime1 , endTime1 , 4, restaurantTables1, "Peanut and severe  Egg Allergy");
        bookingRepository.save(booking1);

        String startTime2 = "2022-03-02T13:00:00";
        String endTime2 = "2022-03-02T15:00:00";
        ArrayList<RestaurantTable> restaurantTables2 = new ArrayList<>();
        restaurantTables2.add(table3);
        Booking booking2 = new Booking(customer4, startTime2 , endTime2 , 10, restaurantTables2, "");
        bookingRepository.save(booking2);

        String startTime3 = "2022-03-03T15:00:00";
        String endTime3 = "2022-03-03T17:00:00";
        ArrayList<RestaurantTable> restaurantTables3 = new ArrayList<>();
        restaurantTables3.add(table1);
        Booking booking3 = new Booking(customer4, startTime3 , endTime3 , 4, restaurantTables3, "");
        bookingRepository.save(booking3);

        String startTime4 = "2022-03-03T19:00:00";
        String endTime4 = "2022-03-03T21:00:00";
        ArrayList<RestaurantTable> restaurantTables4 = new ArrayList<>();
        restaurantTables4.add(table1);
        restaurantTables4.add(table4);
        Booking booking4 = new Booking(customer4, startTime4 , endTime4 , 7, restaurantTables4, "");
        bookingRepository.save(booking4);

        String startTime5 = "2022-03-03T21:00:00";
        String endTime5 = "2022-03-03T23:00:00";
        ArrayList<RestaurantTable> restaurantTables5 = new ArrayList<>();
        restaurantTables5.add(table1);
        restaurantTables5.add(table4);
        Booking booking5 = new Booking(customer4, startTime5 , endTime5 , 7, restaurantTables5, "");
        bookingRepository.save(booking5);
    }
}
