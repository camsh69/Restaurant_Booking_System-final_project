package com.example.restaurantBookingService.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="tables")
public class RestaurantTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "cover")
    private int covers;


    private List<Booking> bookings;

    public RestaurantTable(int covers, List<Booking> bookings) {
        this.covers = covers;
        this.bookings = bookings;
    }

    public RestaurantTable(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getCovers() {
        return covers;
    }

    public void setCovers(int covers) {
        this.covers = covers;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
