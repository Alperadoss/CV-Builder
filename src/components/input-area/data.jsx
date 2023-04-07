import React from "react";
export const inputFieldsData = {
  /* Data to generate input fields in experience and education components */
  experience: {
    jobTitle: {
      label: "Job Title",
      name: "jobTitle",
      placeholder: "E.g. VP of Marketing...",
      type: "text",
    },
    company: {
      label: "Company",
      name: "company",
      placeholder: "E.g. Red Hat...",
      type: "text",
    },
    location: {
      label: "Location",
      name: "location",
      placeholder: "E.g. Berlin...",
      type: "text",
    },
  },
  /** NOTE: Degree has jobTitle as name and School has company as name,
   * The reason is this way the Experience component can be reused as
   * Education component also in the Preview.jsx
   */
  education: {
    school: {
      label: "School",
      name: "company",
      placeholder: "E.g. MIT...",
      type: "text",
    },
    degree: {
      label: "Degree",
      name: "jobTitle",
      placeholder: "e.g. Computer Science...",
      type: "text",
    },
    location: {
      location: "Location",
      label: "Location",
      name: "location",
      placeholder: "E.g. Boston...",
      type: "text",
    },
  },
};
