import React from 'react';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const localizer = momentLocalizer(moment);

const fireSwal = withReactContent(Swal);

const minTime = new Date();
minTime.setHours(13, 0, 0);

const maxTime = new Date();
maxTime.setHours(23, 59, 59);

const ViewBookings = ({events, resourceMap}) => {  

  return (
      <div className="App">
        <Calendar
          selectable={true}
          localizer={localizer}
          events={events}
          defaultView={Views.DAY}
          views={['day', 'month']}
          defaultDate={moment().toDate()}
          startAccessor="start"
          endAccessor="end"
          resources={resourceMap}
          resourceIdAccessor="resourceId"
          resourceTitleAccessor="resourceTitle"
          onSelectSlot={(slotInfo) => fireSwal.fire({
          icon: 'question',
          title: 'Add A New Booking?',
          html: '<strong><a href="/add">Click to Add New Booking</a></strong>',
          confirmButtonColor: '#2A67BC',
          confirmButtonText: "Cancel",
          iconColor: '#A3C4D9',
          showCloseButton: 'true'
          })}
          onSelectEvent={event => fireSwal.fire({
          icon: 'info',
          title: `Booking Ref: ${event.ref}`,
          text: `Contact: ${event.contact}, 
          Phone: ${event.phone}, 
          Email: ${event.email},   
          Party size: ${event.diners},   
          Special message: ${event.message}   LoyaltyCard: ${event.loyaltyCard}`,
          footer: '<strong><a href="/edit">Click to Edit or Delete this Booking</a></strong>',
          confirmButtonColor: '#2A67BC',
          confirmButtonText: "Close",
          iconColor: '#A3C4D9',
          showCloseButton: 'true'

          })}
          min={minTime}
          max={maxTime}
          style={{ height: "75vh" }}
        />
      </div>
    );
}

export default ViewBookings;