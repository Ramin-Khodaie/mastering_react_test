import React, { useState } from "react";

const CustomForm = ({ firstName, onSubmit }) => {
  const [customer, setCustomer] = useState(firstName);

  const handleChangeFirstName = ({ target }) => {
    setCustomer({
      ...customer,
      firstName: target.value,
    });
  };

  return (
    <form id="customer" onSubmit={() => onSubmit(firstName)}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        id="firstName"
        onChange={handleChangeFirstName}
      />
    </form>
  );
};
export default CustomForm;
