import React from 'react';
import './InputField.css';

function InputField({ placeholder, onChange }) {
  return (
    <input
      className="input-field"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default InputField;
