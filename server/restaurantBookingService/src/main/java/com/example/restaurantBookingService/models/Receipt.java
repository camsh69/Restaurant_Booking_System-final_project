package com.example.restaurantBookingService.models;

import javax.persistence.*;

@Entity
@Table(name ="receipts")
public class Receipt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "total_cost")
    private double totalCost;

    @OneToOne(mappedBy = "receipt")
    private Booking booking;

    public Receipt(double totalCost, Booking booking) {
        this.totalCost = totalCost;
        this.booking = booking;
    }

    public Receipt(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
