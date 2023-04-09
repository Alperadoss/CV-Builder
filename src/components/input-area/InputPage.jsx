import React from "react";
import ContactInfo from "./ContactInfo";
import { inputFieldsData } from "./data";
import Experience from "./experience";
import Skills from "./skills";
import "./inputPage.css";
import AboutMe from "./AboutMe";

export default function inputArea(props) {
  return (
    <div className="input-area">
      <ContactInfo setData={props.setData} />
      <AboutMe setData={props.setData} />
      <Skills setData={props.setData} />
      <Experience
        setData={props.setData}
        mode="experience"
        inputFieldsData={inputFieldsData.experience}
      />
      <Experience
        setData={props.setData}
        mode="education"
        inputFieldsData={inputFieldsData.education}
      />
    </div>
  );
}
