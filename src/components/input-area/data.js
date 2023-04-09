export const inputFieldsData = {
  experience: {
    jobTitle: {
      label: "Job Title",
      name: "jobTitle",
      placeholder: "Front End Developer",
      type: "text",
    },
    company: {
      label: "Company",
      name: "company",
      placeholder: "FAANG",
      type: "text",
    },
    location: {
      label: "Location",
      name: "location",
      placeholder: "Izmir",
      type: "text",
    },
  },
  /*Degree has jobTitle as name, School has company
   as name because experience component is used for 
   both education and work experience */
  education: {
    school: {
      label: "School",
      name: "company",
      placeholder: "ITU",
      type: "text",
    },
    degree: {
      label: "Degree",
      name: "jobTitle",
      placeholder: "Computer Science",
      type: "text",
    },
    location: {
      location: "Location",
      label: "Location",
      name: "location",
      placeholder: "Istanbul",
      type: "text",
    },
  },
};
