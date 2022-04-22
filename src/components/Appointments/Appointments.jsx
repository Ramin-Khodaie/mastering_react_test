import React from "react";

const appointmentTimeOfDay = startsAt=>{
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`
}

export const Appointments = ({ customer }) => {
  return <div>{customer.firstName}</div>;
};

export const AppointmentsDayView = ({appointments}) => {
  return (
    <div id="appointmentsDayView">     
    {
      appointments.length === 0 && <p>There are no appointments scheduled for today'</p>
    }
    <ol>
      {
        appointments.map((appointment)=>(
          <li key={appointment.startsAt}>{appointmentTimeOfDay(appointment.startsAt)}</li>
        ))
      }
    </ol>
    </div>
  );
};
