import React from "react";
import { FaLessThanEqual } from "react-icons/fa";
import Input from "./Input";
import Label from "./Label";

const Field = ({
  control,
  name = "",
  placeholder = "",
  type = "text",
  label = "",
  errors,
  isInputPassword = false,
}) => {
  return (
    <div className="relative flex flex-col">
      <Label name={name} label={label} />
      <Input
        isInputPassword={isInputPassword}
        control={control}
        placeholder={placeholder}
        name={name}
        type={type}
      />
      {errors && (
        <p className="absolute -bottom-4 text-red-500 text-xs ml-4 mt-1">
          {errors.message}
        </p>
      )}
    </div>
  );
};

export default Field;
