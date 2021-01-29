import React, { FunctionComponent, ChangeEvent } from "react";

export const Checkbox: FunctionComponent<{
  label?: string;
  isSelected?: boolean;
  onCheckboxChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);
