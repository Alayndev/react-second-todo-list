import React from "react";

export function NoResults({ searchedText }) {
  return (
    <>
      <h4 style={{ textAlign: "center" }}>
        No hay resultados para "{searchedText}"
      </h4>
    </>
  );
}
