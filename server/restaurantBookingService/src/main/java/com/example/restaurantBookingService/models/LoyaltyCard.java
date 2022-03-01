package com.example.restaurantBookingService.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "loyaltyCard")
public class LoyaltyCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "card_number")
    private String cardNumber;

//    @OneToOne( cascade = CascadeType.ALL)
//    @JoinColumn(name = "customer_id", referencedColumnName = "id")
//    private Customer customer;


    @OneToOne(mappedBy = "loyaltyCard")
    private Customer customer;

    public LoyaltyCard() {
    }

    public LoyaltyCard(String cardNumber,Customer customer) {
        this.cardNumber = cardNumber;
        this.customer = customer;


    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
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
