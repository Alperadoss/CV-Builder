import React from "react";

export default function AboutMe(props) {
  function handleOnChange(e) {
    const { name, value } = e.target;
    props.setData((prevState) => ({
      ...prevState,
      shortBio: value,
    }));
  }
  return (
    <div className="short-bio">
      <h3 className="input-area-heading">About Me</h3>
      <textarea
        name="shortBio"
        label="Something about yourself"
        placeholder="After graduation I worked as jr front-end dev for 3 years and gained solid experience..."
        onChange={handleOnChange}
      ></textarea>
    </div>
  );
}
