package com.example.restaurantBookingService.components;

import com.example.restaurantBookingService.models.Customer;
import com.example.restaurantBookingService.repositories.BookingRepository;
import com.example.restaurantBookingService.repositories.CustomerRepository;
import com.example.restaurantBookingService.repositories.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

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


    }
}
