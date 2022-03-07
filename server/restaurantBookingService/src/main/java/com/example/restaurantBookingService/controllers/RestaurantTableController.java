package com.example.restaurantBookingService.controllers;

import com.example.restaurantBookingService.models.RestaurantTable;
import com.example.restaurantBookingService.repositories.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Table;
import java.util.List;

@RestController
public class RestaurantTableController {
    @Autowired
    RestaurantTableRepository restaurantTableRepository;

    @GetMapping(value = "/tables")
    public ResponseEntity<List<RestaurantTable>> getAllTable(){
        return new ResponseEntity<>(restaurantTableRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/tables/{id}")
    public ResponseEntity getTable(@PathVariable Long id){
        return new ResponseEntity<>(restaurantTableRepository.findById(id),HttpStatus.OK);
    }

    @PostMapping(value = "/tables")
    public ResponseEntity<RestaurantTable> postTable(@RequestBody RestaurantTable restaurantTable){
        restaurantTableRepository.save(restaurantTable);
        return new ResponseEntity<>(restaurantTable, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/tables/{id}")
    public void deleteTable(@PathVariable Long id) {
        restaurantTableRepository.deleteById(id);
    }
}
