import React from "react";
import dayjs from "dayjs";

export default function PeriodPicker(props) {
  function handleOnChange(e) {
    const { name, value } = e.target;
    props.updateState((prevArray) =>
      prevArray.map((xp) => {
        if (xp.id === props.id) {
          return {
            ...xp,
            [name]: dayjs(value).format("MMM YYYY"),
          };
        } else return xp;
      })
    );
  }
  return (
    <div className="period-picker">
      <div className="date-picker">
        <div className="input-text-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="date-picker">
        <div className="input-text-group">
          <label htmlFor="endDate">End Date</label>
          <input
            id="endDate"
            type="date"
            name="endDate"
            onChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
}
