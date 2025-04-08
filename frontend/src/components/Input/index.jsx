"use client";
import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[5px]",
};

const variants = {
  fill: {
    white_A700_7f: "bg-white-a700_7f text-black-900_02",
  },
  outline: {
    black_900_02: "border-black-900_02 border border-solid",
    gray_400: "border-gray-400 border border-solid text-gray-600",
    gray_300: "border-gray-300 border border-solid text-gray-400_05",
  },
};

const sizes = {
  md: "h-[2.63rem] pl-[1.25rem] pr-[0.75rem] text-[1.13rem]",
  lg: "h-[3.63rem] pl-[1.25rem] pr-[0.75rem] text-[1.13rem]",
  sm: "h-[2.25rem] px-[0.63rem] text-[0.69rem]",
  xs: "h-[1.88rem] px-[0.50rem] text-[0.63rem]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "sm",
      color = "gray_300",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text border border-solid  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "lg", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700_7f", "black_900_02", "gray_400", "gray_300"]),
};

export { Input };
