import React from 'react';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const localizer = momentLocalizer(moment);

const MySwal = withReactContent(Swal);

const ViewBookings = ({events, resourceMap, minTime, maxTime}) => {

    return (
        <div className="App">
          <Calendar
            localizer={localizer}
            events={events}
            defaultView={Views.DAY}
            views={['day', 'work_week']}
            defaultDate={moment().toDate()}
            startAccessor="start"
            endAccessor="end"
            resources={resourceMap}
            resourceIdAccessor="resourceId"
            resourceTitleAccessor="resourceTitle"
            onSelectEvent={event => MySwal.fire({
            icon: 'info',
            title: `Booking Ref: ${event.ref}`,
            text: `Contact: ${event.contact}, 
            Phone: ${event.phone}, 
            Email: ${event.email},   
            Party size: ${event.diners},   
            Special message: ${event.message}   LoyaltyCard: ${event.loyaltyCard}`,
            footer: '<strong><a href="/edit">Edit or Delete this Booking</a></strong>',
            confirmButtonColor: '#2A67BC',
            iconColor: '#A3C4D9'})}
            min={minTime}
            max={maxTime}
            style={{ height: "75vh" }}
          />
        </div>
      );
}

export default ViewBookings