package com.example.restaurantBookingService.repositories;

import com.example.restaurantBookingService.models.Customer;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    List<Customer> findByLoyaltyCard(String loyaltyCard);
    @Query("SELECT c From Customer c ORDER BY c.bookings.size DESC")
    List<Customer> findCustomers();

}
