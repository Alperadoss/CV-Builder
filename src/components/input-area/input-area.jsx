import React from "react";
import ContactInfo from "./contact-info";
import Skills from "./skills";
import Experience from "./experience";
import { inputFieldsData } from "./data";
import "./input-area.css";

function InputShortBio(props) {
  function handleOnChange(e) {
    const { name, value } = e.target;
    props.setData((prevState) => ({
      ...prevState,
      shortBio: value,
    }));
  }
  return (
    <div className="short-bio">
      <h3 className="input-area-heading">Short Bio</h3>
      <textarea
        name="shortBio"
        label="Something about yourself"
        placeholder="E.g. After graduating I took 2 years off travelling and teaching myself coding and data science and started my journey before working at company X, where I quickly got promoted..."
        onChange={handleOnChange}
      ></textarea>
    </div>
  );
}
export default function inputArea(props) {
  return (
    <div className="input-area">
      <ContactInfo updateState={props.setData} />
      <InputShortBio updateState={props.setData} />
      <Skills updateState={props.setData} />
      <Experience
        updateState={props.setData}
        mode="experience"
        inputFieldsData={inputFieldsData.experience}
      />
      <Experience
        updateState={props.setData}
        mode="education"
        inputFieldsData={inputFieldsData.education}
      />
    </div>
  );
}
