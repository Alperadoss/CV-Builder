import React from "react";
import helpers from "./../helpers";
import InputField from "./input-field";
import PeriodPicker from "./period-picker";
import { useState } from "react";
import { useEffect } from "react";

/** Lists input fields and delete btn for each experience in state */
function InputFields(props) {
  /**To list input fields go through props.data */
  const listFields = Object.values(props.data).map((field) => {
    return (
      /**... An Input Field with its respective data */
      <InputField
        type={field.type}
        name={field.name}
        key={field.name}
        label={field.label}
        placeholder={field.placeholder}
        handleOnChange={handleOnChange}
      />
    );
  });
  /** Update experience in the array on change */
  function handleOnChange(e) {
    const { name, value } = e.target;
    props.updateState((prevArray) =>
      prevArray.map((xp) => {
        if (xp.id === props.id)
          return {
            ...xp,
            [name]: value,
          };
        else return xp;
      })
    );
  }
  /** Delete Experience */
  function handleDeleteXp() {
    props.updateState((prevArray) =>
      prevArray.filter((xp) => props.id != xp.id)
    );
  }
  /**List fields, period picker and delete btn */
  return (
    <div className="experience-input-fields">
      {listFields}
      <PeriodPicker id={props.id} updateState={props.updateState} />
      <button className="del-btn" onClick={handleDeleteXp}>
        Delete {helpers.capitalize(props.mode)}
      </button>
    </div>
  );
}

/** Reusable component for Experience and Education */
export default function Experience(props) {
  /** Store all Experiences in state array */
  const [allExperiences, setAllExperiences] = useState([]);

  // Update App state (data.experience or data.education) when XP Array changes
  useEffect(() => {
    props.updateState((prevState) => ({
      ...prevState,
      [props.mode]: allExperiences,
    }));
  }, [allExperiences]);

  // Add new XP with random ID when clicking on Add XP
  function handleAddXp() {
    setAllExperiences((prevState) => [
      ...prevState,
      { id: helpers.unid(), type: props.mode },
    ]);
  }
  /** For Each xp in the array list editable input fields */
  const listXp = allExperiences.map((xp) => {
    return (
      <InputFields
        data={props.inputFieldsData}
        mode={props.mode}
        id={xp.id}
        key={xp.id}
        updateState={setAllExperiences}
      />
    );
  });

  return (
    <div>
      {listXp}
      <button className="secondary-btn btn" onClick={handleAddXp}>
        {/** Shows Add Experience or add Education (capitalizes props.mode) */}
        Add {helpers.capitalize(props.mode)}
      </button>
    </div>
  );
}
