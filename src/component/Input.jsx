import React from 'react';



const Input = ({ label, type, name, value, onChange, placeholder, maxLength }) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
      style={{ width: '180px' }}
      />
    </div>
  );
};

export default Input;

