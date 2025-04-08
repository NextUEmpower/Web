"use client";
import React from "react";

import SwitchProvider from "@dhiwise/react-switch";
import PropTypes from "prop-types";

const variants = {
  swtOutlineAmber500: {
    onColor: "#ffbd08",
    offHandleColor: "#ffbd08",
    onHandleColor: "#ffffff",
  },
};
const sizes = {
  xs: {
    width: 28,
    height: 14,
  },
};

const Switch = ({
  value = false,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  variant = "swtOutlineAmber500",
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={className}>
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        {...variants[variant]}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </div>
  );
};

Switch.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["swtOutlineAmber500"]),
};

export { Switch };
