package com.example.restaurantBookingService.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "customers")
public class Customer{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email_address")
    private String email;

    @Column(name= "loyalty_card")
    private String loyaltyCard;

    @OneToMany(mappedBy = "customer", fetch = FetchType.LAZY, cascade=CascadeType.ALL)
//    @JsonBackReference
    @JsonIgnoreProperties({"customer"})
    private List<Booking>bookings;


    public Customer() {
    }

    public Customer(String name, String phoneNumber, String email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.loyaltyCard = null;
        this.bookings = new ArrayList<>();

    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public String getLoyaltyCard() {
        return loyaltyCard;
    }

    public void setLoyaltyCard(String loyaltyCard) {
        this.loyaltyCard = loyaltyCard;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
