import React from "react";
export default function InputField(props) {
  return (
    <div className={"input-text-group"}>
      <label htmlFor={props.name} className={"text-input-label"}>
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        className={"text-input " + props.className}
        placeholder={props.placeholder}
        onChange={(e) => props.handleOnChange(e)}
      ></input>
    </div>
  );
}
