package com.example.restaurantBookingService.models;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

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

    @ManyToMany
    @JsonIgnoreProperties({"tables"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "tables_bookings",
            joinColumns = {@JoinColumn(name = "table_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "booking_id", nullable = false, updatable = false)}
    )
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
