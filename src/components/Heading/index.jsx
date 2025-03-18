import React from "react";

const sizes = {
  h1: "text-[1.94rem] font-semibold md:text-[1.81rem] sm:text-[1.69rem]",
  b_h1: "tracking-[0.00rem] font-inter text-[1.13rem] font-semibold",
  text4xl: "text-[1.00rem] font-medium",
  text6xl: "text-[1.13rem] font-medium",
  text7xl: "text-[1.19rem] font-medium",
  text8xl: "text-[1.25rem] font-medium",
  headingxs: "text-[0.50rem] font-bold",
  headings: "text-[0.63rem] font-semibold",
  headingmd: "text-[0.69rem] font-bold",
  headinglg: "text-[0.88rem] font-bold",
  headingxl: "text-[1.13rem] font-bold",
  heading2xl: "text-[1.19rem] font-semibold",
  heading3xl: "text-[1.25rem] font-semibold",
  heading4xl: "text-[4.25rem] font-extrabold md:text-[3.00rem]",
};

const Heading = ({ children, className = "", size = "text4xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_02 font-lexend ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
