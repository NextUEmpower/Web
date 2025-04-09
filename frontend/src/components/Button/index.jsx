import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-md",
};
const variants = {
  fill: {
    amber_A400: "bg-amber-a400 text-black_amp_white-white",
    light_green_800: "bg-light_green-800 text-black_amp_white-white",
    colors_indigo: "bg-colors-indigo",
    gray_400_04: "bg-gray-400_04 text-black-900_02",
    gray_300_02: "bg-gray-300_02 text-black-900_02",
    gray_400_01: "bg-gray-400_01",
    deep_purple_A700: "bg-deep_purple-a700",
    red_700: "bg-red-700 text-black_amp_white-white",
    deep_purple_50_e5: "bg-deep_purple-50_e5",
    gray_500_7f: "bg-gray-500_7f text-black_amp_white-white",
    amber_500: "bg-amber-500 text-gray-200_02",
    yellow_600: "bg-yellow-600",
    deep_purple_500: "bg-deep_purple-500 text-black_amp_white-white",
    deep_purple_500_04: "bg-deep_purple-500_04 text-black_amp_white-white",
  },
  outline: {
    black_900_02: "border-black-900_02 border border-solid text-black-900_02",
    indigo_50: "border-gray-300 border border-solid",
    amber_A400: "border-amber-a400 border-[1.3px] border-solid text-amber-a400",
  },
};
const sizes = {
  "5xl": "h-[2.88rem] px-[1.25rem] text-[0.75rem]",
  lg: "h-[1.88rem] px-[0.38rem]",
  sm: "h-[1.50rem] px-[0.25rem]",
  "6xl": "h-[3.13rem] px-[0.63rem]",
  "2xl": "h-[2.50rem] px-[1.25rem] text-[0.75rem]",
  "7xl": "h-[3.38rem] px-[1.00rem]",
  xs: "h-[1.38rem] px-[0.63rem] text-[0.56rem]",
  "4xl": "h-[2.50rem] px-[0.38rem]",
  "3xl": "h-[2.50rem] px-[1.25rem] text-[1.00rem]",
  xl: "h-[2.13rem] px-[0.88rem] text-[0.94rem]",
  md: "h-[1.75rem] px-[2.13rem] text-[0.75rem]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "deep_purple_500_04",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["5xl", "lg", "sm", "6xl", "2xl", "7xl", "xs", "4xl", "3xl", "xl", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "amber_A400",
    "light_green_800",
    "colors_indigo",
    "gray_400_04",
    "gray_300_02",
    "gray_400_01",
    "deep_purple_A700",
    "red_700",
    "deep_purple_50_e5",
    "gray_500_7f",
    "amber_500",
    "yellow_600",
    "deep_purple_500",
    "deep_purple_500_04",
    "black_900_02",
    "indigo_50",
  ]),
};

export { Button };
