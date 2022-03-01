package com.example.restaurantBookingService.repositories;

import com.example.restaurantBookingService.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    List<Customer> findByOrderByBookings();

    List<Customer> findByLoyaltyCard(String loyaltyCard);
}
