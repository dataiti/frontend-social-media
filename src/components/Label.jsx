import React, { memo } from "react";

const Label = ({ label = "", name = "" }) => {
  return (
    <label className="text-sm font-bold ml-4 text-cyan-700" htmlFor={name}>
      {label}
    </label>
  );
};

export default memo(Label);
