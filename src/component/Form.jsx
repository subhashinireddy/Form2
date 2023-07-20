import React, { useState } from "react";
import Input from "./Input";
import Button from "./button";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phonenumber: "",
  });

  const { name, email, age, phonenumber } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
      onSubmit(formData);
      setFormData({
        name: "",
        email: "",
        age: "",
        phonenumber: "",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 style={{ color: "white" }}>Student Details</h1>

      <Input
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Enter your Name"
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <Input
        label="Age"
        type="number"
        name="age"
        value={age}
        onChange={handleChange}
        placeholder="Enter your age"
      />

      <Input
        label="Phonenumber"
        type="phonenumber"
        name="phonenumber"
        value={phonenumber}
        onChange={handleChange}
        placeholder="phonenumber"
        maxLength={10}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
