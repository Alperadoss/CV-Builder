import React from "react";
import InputField from "./input-field";
export default function ContactInfo(props) {
  function handleOnChange(e) {
    const { name, value } = e.target;
    props.updateState((prevState) => ({
      ...prevState,
      contactInfo: {
        ...prevState.contactInfo,
        [name]: value,
      },
    }));
  }
  return (
    <div className="contact-info">
      <h3 className="input-area-heading">Contact Info</h3>
      <div className="form-group-row">
        <InputField
          type="text"
          name="fullName"
          label="Full Name"
          placeholder="e.g. John Smith..."
          handleOnChange={handleOnChange}
        />
        <InputField
          type="text"
          name="jobTitle"
          label="Job Title"
          placeholder="e.g. Astronaut..."
          handleOnChange={handleOnChange}
        />
      </div>
      <InputField
        type="text"
        name="emailAddress"
        label="Your email"
        placeholder="johnsmith@protonmail.com..."
        handleOnChange={handleOnChange}
      />

      <div className="form-group-row">
        <InputField
          type="tel"
          name="phoneNumber"
          label="Phone Number"
          placeholder="e.g. +44 7000000..."
          handleOnChange={handleOnChange}
        />
        <InputField
          type="text"
          name="linkedin"
          label="LinkedIn Username"
          placeholder="e.g. johnsmith"
          handleOnChange={handleOnChange}
        />
      </div>

      <div className="form-group-row">
        <InputField
          type="text"
          name="website"
          label="Website"
          placeholder="e.g. www.johnsmith.com..."
          handleOnChange={handleOnChange}
        />
        <InputField
          type="text"
          name="location"
          label="Location"
          placeholder="e.g. London, Remote..."
          handleOnChange={handleOnChange}
        />
      </div>
    </div>
  );
}
