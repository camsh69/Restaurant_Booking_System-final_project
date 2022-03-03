import React from 'react';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link } from "react-router-dom";



const ViewBookings = ({bookings}) => {

const localizer = momentLocalizer(moment);

const events = bookings.map(booking => {
  return {
    start: new Date(booking.startTime),
    end: new Date(booking.endTime),
    title: booking.customer.name,
    resourceId: booking.tables[0].id
  }
})

const tempEvents = [
  { start: new Date('2022-03-03T19:00:00'), end: new Date('2022-03-03T21:00:00'), title: "Arya James", resourceId: 1 }
];

const minTime = new Date();
minTime.setHours(13, 0, 0);
const maxTime = new Date();
maxTime.setHours(23, 59, 59)

const resourceMap = [
    { resourceId: 1, resourceTitle: 'Table 1' },
    { resourceId: 2, resourceTitle: 'Table 2' },
    { resourceId: 3, resourceTitle: 'Table 3' },
    { resourceId: 4, resourceTitle: 'Table 4' },
  ]

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
            min={minTime}
            max={maxTime}
            style={{ height: "75vh" }}
            
          />
        </div>
      );
}

export default ViewBookings