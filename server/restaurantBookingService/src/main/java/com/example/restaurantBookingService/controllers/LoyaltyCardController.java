package com.example.restaurantBookingService.controllers;

import com.example.restaurantBookingService.models.Customer;
import com.example.restaurantBookingService.models.LoyaltyCard;
import com.example.restaurantBookingService.repositories.LoyaltyCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LoyaltyCardController {
    @Autowired
    LoyaltyCardRepository loyaltyCardRepository;

    @GetMapping(value = "/loyaltyCards")
    public ResponseEntity<List<LoyaltyCard>> getAllLoyaltyCards(){
        return new ResponseEntity<>(loyaltyCardRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/loyaltyCards/{id}")
    public ResponseEntity getLoyaltyCard(@PathVariable Long id){
        return new ResponseEntity<>(loyaltyCardRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/loyaltyCards")
    public ResponseEntity<LoyaltyCard>createLoyaltyCard(@RequestBody LoyaltyCard loyaltyCard){
        loyaltyCardRepository.save(loyaltyCard);
        return new ResponseEntity<>(loyaltyCard, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/loyaltyCards/{id}")
    public ResponseEntity<LoyaltyCard> updateLoyaltyCard(@RequestBody LoyaltyCard loyaltyCard){
       loyaltyCardRepository.save(loyaltyCard);
        return new ResponseEntity<>(loyaltyCard, HttpStatus.OK);
    }

    @DeleteMapping(value = "/loyaltyCards/{id}")
    public ResponseEntity<Customer> deleteLoyaltyCard(@PathVariable Long id){
       LoyaltyCard found = loyaltyCardRepository.getOne(id);
        loyaltyCardRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    };
}
