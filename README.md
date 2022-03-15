# Group JavaScript Project - Full Stack Stock Tracker App

## Technologies used
- Java Spring Boot, React

## Important
For app to work create an emailkey.js in src folder.  

For email functionality to work, sign up for EmailJS (https://www.emailjs.com/) account and choose a service provider, create a template and copy the following info from EmailJS into the emailkey.js file :

`export default {`

`SERVICE_ID: 'YOUR_SERVICE_ID_HERE', TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE', USER_ID: 'YOUR_USER_ID_HERE'`

 `}`

## How to run
- Open the server/restaurantBookingService files in IntelliJ
- In main/java folder, right click on RestaurantBookingServiceApplication file and select Run 'RestaurantBook...main()'



- CD into client folder and run command ~ `npm install` to install dependencies
- Run command ~ `npm start`
- App should be visible in browser `http://localhost:3000`

## The Brief - Restaurant Table Booking Application

You have been tasked to create a booking system for a brand new restaurant.  The restaurant needs a way to book and arrange tables for customers who are booking over the phone. This system is for the staff to use.

## MVP

A user should be able to:

- Allow a customer to book a table at the restaurant for a particular time and date
- Update a booking, for example if the customer wants to change a booking time
- Display a list of bookings for a given date
- Display a list of customers ordered by frequency of visit

## Extensions

- Don't allow double bookings
- Give discounts to frequent customers
- Send an email confirmation
