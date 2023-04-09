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
          placeholder="John Doe"
          handleOnChange={handleOnChange}
        />
        <InputField
          type="text"
          name="emailAddress"
          label="Your email"
          placeholder="johndoe@gmail.com"
          handleOnChange={handleOnChange}
        />
      </div>

      <div className="form-group-row">
        <InputField
          type="tel"
          name="phoneNumber"
          label="Phone Number"
          placeholder="+90 123 45 67"
          handleOnChange={handleOnChange}
        />
        <InputField
          type="text"
          name="linkedin"
          label="LinkedIn Username"
          placeholder="/johndoe"
          handleOnChange={handleOnChange}
        />
      </div>

      <div className="form-group-row">
        <InputField
          type="text"
          name="website"
          label="Website"
          placeholder="www.johndoe.com..."
          handleOnChange={handleOnChange}
        />
        <InputField
          type="text"
          name="location"
          label="Location"
          placeholder="Istanbul"
          handleOnChange={handleOnChange}
        />
      </div>
    </div>
  );
}
