import React from "react";

const sizes = {
  menu_text: "text-[0.94rem] font-normal",
  h1_sub: "text-[1.13rem] font-normal",
  b_p1: "tracking-[0.00rem] font-inter text-[0.63rem] font-normal",
  textxs: "text-[0.50rem] font-normal",
  texts: "text-[0.56rem] font-normal",
  textmd: "text-[0.63rem] font-normal",
  textlg: "text-[0.69rem] font-normal",
  textxl: "text-[0.75rem] font-normal",
  text2xl: "text-[0.88rem] font-normal",
  text3xl: "text-[0.94rem] font-normal",
  text5xl: "text-[1.06rem] font-normal",
};

const Text = ({ children, className = "", as, size = "text2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_02 font-lexend ${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
