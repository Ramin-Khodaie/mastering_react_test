import React, { useState } from "react";

const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");
  return `${h}:${m}`;
};

export const Appointments = ({ customer }) => {
  return <div>{customer.firstName}</div>;
};

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedApp, setSelectedApp] = useState(0);
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment,i) => (
          <li key={appointment.startsAt}>
            <button type="button" onClick={() => setSelectedApp(i)}>
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        appointments.length === 0 && (
          <p>There are no appointments scheduled for today</p>
        )
      ) : (
        <Appointments {...appointments[selectedApp]} />
      )}
    </div>
  );
};
