import React from "react";
import { Link, LinkProps, useMatch } from "react-router-dom";

export type RouterLinkProps = Omit<LinkProps, "className" | "to"> & {
  to: string;
  className: (isFocused: boolean) => string;
};

const RouterLink: React.FC<RouterLinkProps> = (props) => {
  let { className, ...filteredProps } = props;
  let isFocused = !!useMatch({ path: props.to, end: true });

  return (
    <Link
      className={className ? className(isFocused) : undefined}
      {...filteredProps}
    />
  );
};

export default RouterLink;
