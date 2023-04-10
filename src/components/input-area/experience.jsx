import React, { useState, useEffect } from "react";
import helpers from "../helpers";
import InputField from "./Input-field";
import PeriodPicker from "./Period-picker";

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
    props.setData((prevArray) => {
      return prevArray.map((xp) => {
        if (xp.id === props.id) {
          return {
            ...xp,
            [name]: value,
          };
        } else {
          return xp;
        }
      });
    });
  }
  /** Delete Experience */
  function handleDeleteXp() {
    props.setData((prevArray) => {
      return prevArray.filter((xp) => xp.id !== props.id);
    });
  }
  /**List fields, period picker and delete btn */
  return (
    <div className="experience-input-fields">
      {listFields}
      <PeriodPicker id={props.id} setData={props.setData} />
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
    props.setData((prevState) => ({
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
