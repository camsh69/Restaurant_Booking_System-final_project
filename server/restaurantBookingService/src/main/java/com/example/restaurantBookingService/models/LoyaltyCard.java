package com.example.restaurantBookingService.models;

public class LoyaltyCard {

    private Long id;
    private String cardNumber;

    public LoyaltyCard() {
    }

    public LoyaltyCard(String cardNumber) {
        this.cardNumber = cardNumber;

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }
}
