import React from "react";


const AppointmentForm = ({ services }) => {
  console.log(7788, services);
  return (
    <form id="appointment">
      <select name="service">
        {services && services.map((serv) => <option key={serv}>{serv}</option>)}
      </select>
    </form>
  );
};

  
export default AppointmentForm;

AppointmentForm.defaultProps = {
    services:[
        
    ]
}
