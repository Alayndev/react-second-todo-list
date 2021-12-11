import React, { useState } from "react";

// HOC
export function withStorageListener(WrappedComp) {
  return function WrappedCompWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log(`Hubo cambios en ${change.key}`);

        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.syncBrowsertab();
      setStorageChange(false);
    };

    return (
      <>
        <WrappedComp show={storageChange} toggleShow={toggleShow} />
      </>
    );
  };
}
