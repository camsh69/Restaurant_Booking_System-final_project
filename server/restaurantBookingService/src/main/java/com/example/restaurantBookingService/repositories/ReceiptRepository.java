package com.example.restaurantBookingService.repositories;

import com.example.restaurantBookingService.models.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptRepository extends JpaRepository<Receipt, Long> {
}
