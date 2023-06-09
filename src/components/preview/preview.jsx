import React, { forwardRef } from "react";
import "./preview.css";

/** Header Component */
function Header({ data }) {
  return (
    <div className="cv-box-header">
      <div className="cv-box-name-title">
        <h4>{data.contactInfo.fullName}</h4>
        <p>{data.contactInfo.jobTitle}</p>
      </div>
      <div className="cv-box-contact-info">
        <p className="contact-info-lines">{data.contactInfo.phoneNumber}</p>
        <p className="contact-info-lines">
          <a href={"mailto:" + data.contactInfo.emailAddress}>
            {data.contactInfo.emailAddress}
          </a>
        </p>
        <p className="contact-info-lines">
          <a href={"https://linkedin.com/in/" + data.contactInfo.linkedin}>
            {data.contactInfo.linkedin && "in/" + data.contactInfo.linkedin}
          </a>
        </p>
        <p className="contact-info-lines">
          <a href={data.contactInfo.website}>{data.contactInfo.website}</a>
        </p>
        <p className="contact-info-lines">{data.contactInfo.location}</p>
      </div>
    </div>
  );
}
/* About Me Component */
function AboutMe(props) {
  return (
    <div className="preview-bio">
      <h3>{props.bio && "Bio"}</h3>
      <p>{props.bio}</p>
    </div>
  );
}

/* Component that displays Skills */
function Skills(props) {
  const listSkills = props.data.map((skill) => {
    if (skill.skillName || skill.skillLevel)
      return (
        <li key={skill.id}>
          <span className="preview-skill-name">{skill.skillName}</span>
          <span className="preview-skill-value">{skill.skillLevel}</span>
        </li>
      );
  });

  return (
    <div className="preview-skills">
      <h3>Skills</h3>
      <ul className="ul-skills">{listSkills}</ul>
    </div>
  );
}

/** Display Experiences */
function Experience(props) {
  const listXP = props.data.map((xp) => {
    return (
      <div className="xp-block">
        <div className="xp-flex-row">
          <h6 className="xp-title">{xp.jobTitle}</h6>
          <p>{xp.company}</p>
        </div>

        <p className="preview-xp-time">
          {xp.startDate} - {xp.endDate}
        </p>
        <p className="preview-xp-time">{xp.location}</p>
      </div>
    );
  });
  return (
    <div className="preview-experience">
      <h3>{props.type}</h3>
      {listXP}
    </div>
  );
}
const Preview = React.forwardRef((props, ref) => {
  const data = props.data;
  return (
    <div className="preview-area" ref={ref}>
      <div className="cv-box">
        <Header data={data} />
        <div className="bio-and-skills">
          <AboutMe bio={data.shortBio} />
          {props.data.skills.length > 0 && <Skills data={data.skills} />}
        </div>
        {props.data.experience.length > 0 && (
          <Experience data={data.experience} type="Experience" />
        )}
        {props.data.experience.length > 0 && (
          <Experience data={data.education} type="Education" />
        )}
      </div>
    </div>
  );
});

export default Preview;
