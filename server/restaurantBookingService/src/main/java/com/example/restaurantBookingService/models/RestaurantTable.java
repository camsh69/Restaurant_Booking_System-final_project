package com.example.restaurantBookingService.models;



import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="restaurant_tables")
public class RestaurantTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "cover")
    private int covers;

    @ManyToMany
   @JsonBackReference
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "restaurant_tables_bookings",
            joinColumns = {@JoinColumn(name = "restaurant_tables_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "booking_id", nullable = false, updatable = false)}
    )
    private List<Booking> bookings;

    public RestaurantTable(int covers) {
        this.covers = covers;
        this.bookings = new ArrayList<>();
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
