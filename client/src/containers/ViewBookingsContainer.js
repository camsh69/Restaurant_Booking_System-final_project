import React, { useEffect, useState } from 'react';
import ViewBookings from '../components/ViewBookingsComponent/ViewBookings';

const ViewBookingContainer = ({bookings, tables}) => {

  const [events, setEvents] = useState([]);

  const createEvents = (bookings) => {
    let eventsArray = []
    for (let i = 0; i < bookings.length; i++) {
      for (let j = 0; j < bookings[i].tables.length; j++) {
        eventsArray.push({
          start: new Date(bookings[i].startTime),
          end: new Date(bookings[i].endTime),
          title: `Booking Ref: ${bookings[i].id},
          ${bookings[i].customer.name}`,
          resourceId: bookings[i].tables[j].id,
          ref: bookings[i].id,
          contact: bookings[i].customer.name,
          message: bookings[i].message, 
          diners: bookings[i].diners,
          loyaltyCard: bookings[i].customer.loyaltyCard,
          email: bookings[i].customer.email,
          phone: bookings[i].customer.phoneNumber
        });
      }
    }
    return eventsArray;
  }

  const resourceMap = tables.map(table => {
    return {
      resourceId: table.id,
      resourceTitle: `Table ${table.id} (${table.covers} covers)`
    }
  });

  useEffect(() => {
    const eventsArray = createEvents(bookings);
    setEvents(eventsArray);
  }, []);


  return (

    <ViewBookings events={events} resourceMap={resourceMap} />
  );
}

export default ViewBookingContainer;