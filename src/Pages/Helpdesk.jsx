import React from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

function Helpdesk() {
  return (
    <div>
      <h2>Helpdesk Form</h2>
      <InputField placeholder="Enter your name" />
      <InputField placeholder="Describe your issue" />
      <Button label="Submit" onClick={() => alert('Form Submitted')} />
    </div>
  );
}

export default Helpdesk;
