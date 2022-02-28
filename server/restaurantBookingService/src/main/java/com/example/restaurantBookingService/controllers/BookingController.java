package com.example.restaurantBookingService.controllers;

import com.example.restaurantBookingService.models.Booking;
import com.example.restaurantBookingService.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping(value = "/bookings")
    public ResponseEntity<List<Booking>> getAllBookings() {
        return new ResponseEntity<>(bookingRepository.findAll(), HttpStatus.CREATED);
    }

    @GetMapping(value = "/bookings/{id}")
    public ResponseEntity getBooking(@PathVariable Long id) {
        return new ResponseEntity<>(bookingRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/bookings")
    public ResponseEntity<Booking> postBooking(@RequestBody Booking booking) {
        bookingRepository.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }

    @GetMapping(value = "/bookings/{id}")
    public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking) {
        bookingRepository.save(booking);
        return new ResponseEntity<>(booking, HttpStatus.OK);
    }

    @DeleteMapping(value = "/bookings/{id}")
    public ResponseEntity<Booking> deleteBooking(@PathVariable Long id) {
        Booking found = bookingRepository.getById(id);
        bookingRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
