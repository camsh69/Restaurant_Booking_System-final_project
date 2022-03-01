package com.example.restaurantBookingService.repositories;

import com.example.restaurantBookingService.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
