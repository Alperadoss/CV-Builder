import React from "react";
import ContactInfo from "./ContactInfo";
import Skills from "./skills";
import Experience from "./experience";
import { inputFieldsData } from "./data";
import "./inputPage.css";
import AboutMe from "./AboutMe";

export default function inputArea(props) {
  return (
    <div className="input-area">
      <ContactInfo updateState={props.setData} />
      <AboutMe updateState={props.setData} />
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
