"use client";
import React from "react";

const styles = {
  item: { alignItems: "center", display: "inline-flex", gap: "inherit" },
  list: { alignItems: "center", display: "flex", gap: "inherit", listStyle: "none", wordWrap: "break-word" },
  separator: { alignItems: "center", display: "inline-flex" },
};

const BreadcrumbContext = React.createContext({ separator: null });
const useBreadcrumbContext = () => {
  const context = React.useContext(BreadcrumbContext);
  if (!context) throw new Error("BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator must be used within a Breadcrumb");
  return context;
};

const BreadcrumbItemContext = React.createContext({ isCurrent: false, isLast: false });
const useBreadcrumbItemContext = () => {
  const context = React.useContext(BreadcrumbItemContext);
  if (!context) throw new Error("BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator must be used within a Breadcrumb");
  return context;
};

function BreadcrumbSeparator(props) {
  const { children, style, role = "presentation", ...restProps } = props;
  const { separator } = useBreadcrumbContext();
  const { isLast } = useBreadcrumbItemContext();

  if (!separator || isLast) return null;
  return (
    <span role={role} style={{ ...styles.separator, ...style }} {...restProps}>
      {children ?? separator}
    </span>
  );
}

function BreadcrumbLink(props) {
  const { as = "a", ...restProps } = props;
  const { isCurrent } = useBreadcrumbItemContext();

  const Component = isCurrent ? "span" : as;
  if (isCurrent) delete restProps.href;

  return <Component {...restProps} aria-current={isCurrent ? "page" : undefined} />;
}

function BreadcrumbItem(props) {
  const { isCurrentPage, style, children, ...restProps } = props;

  return (
    <li style={{ ...styles.item, ...style }} {...restProps}>
      {children}
      <BreadcrumbSeparator />
    </li>
  );
}

const Breadcrumb = () => {
    return <div>Breadcrumb Component</div>;
};

export default Breadcrumb;

export { BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator };
