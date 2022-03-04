import React from 'react';
import ViewBookings from '../components/ViewBookingsComponent/ViewBookings';

const ViewBookingContainer = ({bookings, tables}) => {

  const events = []
  bookings.forEach(booking => {
    if (booking.tables.length === 1){
      events.push({
        start: new Date(booking.startTime),
        end: new Date(booking.endTime),
        title: `Booking Ref: ${booking.id},
        ${booking.customer.name}`,
        resourceId: booking.tables[0].id,
        ref: booking.id,
        contact: booking.customer.name,
        message: booking.message, 
        diners: booking.diners,
        loyaltyCard: booking.customer.loyaltyCard,
        email: booking.customer.email,
        phone: booking.customer.phoneNumber
      })
    } else {
      events.push({
        start: new Date(booking.startTime),
        end: new Date(booking.endTime),
        title: `Booking Ref: ${booking.id},
        ${booking.customer.name}`,
        resourceId: booking.tables[0].id,
        ref: booking.id,
        contact: booking.customer.name,
        message: booking.message, 
        diners: booking.diners,
        loyaltyCard: booking.customer.loyaltyCard,
        email: booking.customer.email,
        phone: booking.customer.phoneNumber
      },
      {
        start: new Date(booking.startTime),
        end: new Date(booking.endTime),
        title: `Booking Ref: ${booking.id},
        ${booking.customer.name}`,
        resourceId: booking.tables[1].id,
        ref: booking.id,
        contact: booking.customer.name,
        message: booking.message, 
        diners: booking.diners,
        loyaltyCard: booking.customer.loyaltyCard,
        email: booking.customer.email,
        phone: booking.customer.phoneNumber
      })
    }
  })

  const resourceMap = tables.map(table => {
    return {
      resourceId: table.id,
      resourceTitle: 'Table ' + table.id + " (" + table.covers + " covers)"
    }
  })

  const minTime = new Date();
  minTime.setHours(13, 0, 0);
  const maxTime = new Date();
  maxTime.setHours(23, 59, 59)

  return (
    <>
        <ViewBookings bookings={bookings} tables={tables} events={events} resourceMap={resourceMap} minTime={minTime} maxTime={maxTime}/>
    </>  
  )
}

export default ViewBookingContainer