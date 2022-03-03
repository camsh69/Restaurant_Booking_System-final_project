import React from 'react';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

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
            min={minTime}
            max={maxTime}
            style={{ height: "75vh" }}
          />
        </div>
      );
}

export default ViewBookings