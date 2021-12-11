import React from "react";

export function TodoHeader({ children, loading }) {
  const childrenArray = React.Children.toArray(children);
  return (
    <>
      <header>
        {childrenArray.map((child) => React.cloneElement(child, { loading }))}
      </header>
    </>
  );
}
