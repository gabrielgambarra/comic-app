import React from "react";
import { DescriptionInput, NewDataInput } from "./style";

const EditInput = ({ onChange, value, type }) => {
  return type === "textarea" ? (
    <DescriptionInput
      onChange={(e) => onChange(e.target.value)}
      value={value}
      rows="4"
    />
  ) : (
    <NewDataInput onChange={(e) => onChange(e.target.value)} value={value} />
  );
};

export default EditInput;
