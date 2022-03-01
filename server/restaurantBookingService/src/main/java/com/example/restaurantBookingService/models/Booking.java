package com.example.restaurantBookingService.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonBackReference(value="bookings")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @Column(name="start_time")
    private LocalDateTime startTime;

    @Column(name="end_time")
    private LocalDateTime endTime;

    @Column(name="diners")
    private int diners;

    @Column(name="message")
    private String message;

    @JsonIgnoreProperties(value="bookings")
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="receipt_id", referencedColumnName = "id")
    private Receipt receipt;

    @JsonIgnoreProperties(value="bookings")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "restaurant_tables_bookings",
            joinColumns = {@JoinColumn(name = "booking_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "restaurant_tables_id", nullable = false, updatable = false)}
    )
    private List<RestaurantTable> restaurantTables;

    public Booking() {
    }

    public Booking(Customer customer, LocalDateTime startTime, LocalDateTime endTime, int diners, ArrayList<RestaurantTable> restaurantTables, String message) {
        this.customer = customer;
        this.startTime = startTime;
        this.endTime = endTime;
        this.diners = diners;
        this.message = message;
        this.receipt = null;
        this.restaurantTables = restaurantTables;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public int getDiners() {
        return diners;
    }

    public void setDiners(int diners) {
        this.diners = diners;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Receipt getReceipt() {
        return receipt;
    }

    public void setReceipt(Receipt receipt) {
        this.receipt = receipt;
    }

    public List<RestaurantTable> getTables() {
        return restaurantTables;
    }

    public void setTables(List<RestaurantTable> restaurantTables) {
        this.restaurantTables = restaurantTables;
    }

    public void addRestaurantTables(RestaurantTable restaurantTable) {
        this.restaurantTables.add(restaurantTable);
    }
}
