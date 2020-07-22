import React from "react";

const RouteLink = (props) => {
  const { replace, to, children, ...restProps } = props;
  const linkTo = to;
  return (
    <a
      {...restProps}
      href={linkTo}
      onClick={(e) => {
        e.preventDefault();
        const changeState = window.history[replace ? "replaceState" : "pushState"];
        changeState({}, null, linkTo);
      }}
    >
      {children}
    </a>
  );
};

export default RouteLink;