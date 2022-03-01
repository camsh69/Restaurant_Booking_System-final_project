package com.example.restaurantBookingService.models;


import javax.persistence.*;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email_address")
    private String email;

    @OneToOne
    @JoinColumn(name = "loyaltyCard_id", referencedColumnName = "id")
    private LoyaltyCard loyaltyCard;
//
//    @OneToOne(mappedBy = "customer", cascade = CascadeType.ALL)
//    private LoyaltyCard loyaltyCard;

    public Customer() {
    }

    public Customer(String name, String phoneNumber, String email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;

    }

    public LoyaltyCard getLoyaltyCard() {
        return loyaltyCard;
    }

    public void setLoyaltyCard(LoyaltyCard loyaltyCard) {
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
