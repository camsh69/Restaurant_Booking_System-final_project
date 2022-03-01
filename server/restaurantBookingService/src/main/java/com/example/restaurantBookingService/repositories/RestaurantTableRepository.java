package com.example.restaurantBookingService.repositories;

import com.example.restaurantBookingService.models.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantTableRepository extends JpaRepository<RestaurantTable, Long> {
}
