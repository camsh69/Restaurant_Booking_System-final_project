package com.example.restaurantBookingService.controllers;

import com.example.restaurantBookingService.models.Receipt;
import com.example.restaurantBookingService.repositories.ReceiptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReceiptController {

    @Autowired
    ReceiptRepository receiptRepository;

    @GetMapping(value = "/receipts")
    public ResponseEntity<List<Receipt>> getAllReceipt(){
        return new ResponseEntity<>(receiptRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "receipts/{id}")
    public ResponseEntity getReceipt(@PathVariable Long id){
        return new ResponseEntity<>(receiptRepository.findById(id),HttpStatus.OK);
    }

    @PostMapping(value = "/receipts")
    public ResponseEntity<Receipt> postReceipt(@RequestBody Receipt receipt){
        receiptRepository.save(receipt);
        return new ResponseEntity<>(receipt, HttpStatus.OK);
    }

    @DeleteMapping(value = "/receipts/{id}")
    public void deleteTable(@PathVariable Long id){
        receiptRepository.deleteById(id);
    }

}
