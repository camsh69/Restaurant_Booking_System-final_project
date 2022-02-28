package com.example.restaurantBookingService.models;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Booking {

    private Long id;
    private Customer customer;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private int diners;
    private String message;
    private Receipt receipt;
    private List<RestaurantTable> tables;

    public Booking() {
    }

    public Booking(Customer customer, LocalDateTime startTime, LocalDateTime endTime, int diners, String message) {
        this.customer = customer;
        this.startTime = startTime;
        this.endTime = endTime;
        this.diners = diners;
        this.message = message;
        this.receipt = null;
        this.tables = new ArrayList<>();
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
        return tables;
    }

    public void setTables(List<RestaurantTable> tables) {
        this.tables = tables;
    }
}
