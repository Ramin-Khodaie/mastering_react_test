import React from 'react'

const CustomForm = ({firstName}) => {
  return(
      <form id='customer'>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' name='firstName' value={firstName} id='firstName'/>
      </form>
  );
};
export default CustomForm;
