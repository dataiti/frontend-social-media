import React from "react";
import { Link } from "react-router-dom";

const primaryStyle =
  "text-md text-white shadow-md bg-cyan-900 hover:bg-cyan-800 transition-all";
const outlineStyle =
  "text-sm text-cyan-900 border-2 border-cyan-900 shadow-md hover:bg-cyan-50 transition-all";

const Button = ({
  type = "",
  to = "",
  onClick = () => {},
  children,
  primary,
  outline,
  size = "",
  leftIcon,
  disable = false,
  className = "",
  props,
}) => {
  let Button = "button";

  const rest = {
    onClick: onClick,
    type: { type },
    ...props,
  };

  if (to) {
    Button = Link;
    rest.to = to;
  }

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  return (
    <Button
      className={`rounded-md flex items-center justify-center
        ${primary && `${primaryStyle}`} 
        ${outline && `${outlineStyle}`} 
        ${(size = "medium" && "px-6 py-1")} ${className}`}
      {...rest}
    >
      {leftIcon && <div className="mr-2">{leftIcon}</div>}
      {<span className="">{children}</span>}
    </Button>
  );
};

export default Button;
