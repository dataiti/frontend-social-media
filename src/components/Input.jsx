import React, { memo, useState } from "react";
import { useController } from "react-hook-form";
import { icons } from "../utils/icons";

const Input = ({
  control,
  name = "",
  type = "text",
  placeholder = "",
  isInputPassword = false,
  className = "",
}) => {
  const [isShowPassword, setIsShowPassword] = useState(true);
  const { field } = useController({ control, defaultValue: "", name });

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="relative ">
      <input
        id={name}
        type={isShowPassword ? type : "text"}
        placeholder={placeholder}
        autoComplete="on"
        className={`w-full text-gray-500 bg-white pl-5 pr-10 py-2 rounded-full border-2 
          border-white hover:border-2 hover:border-cyan-700 transition-all 
          outline-none select-none placeholder:text-sm ${className}`}
        {...field}
      />
      {isInputPassword && (
        <span
          className="absolute right-3 -translate-y-1/2 top-1/2 text-gray-600 cursor-pointer"
          onClick={handleShowPassword}
        >
          {isShowPassword ? (
            <icons.AiOutlineEye size={20} />
          ) : (
            <icons.AiOutlineEyeInvisible size={20} />
          )}
        </span>
      )}
    </div>
  );
};

export default memo(Input);
