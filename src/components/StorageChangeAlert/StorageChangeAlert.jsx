import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./StorageChangeAlert.css";
//import { useStorageListener } from "../../hooks/useStorageListener";

// Uso del HOC
function StorageChangeAlert({ show, toggleShow }) {
  //const { show, toggleShow } = useStorageListener(syncBrowsertab); // Alternativa con Custom Hook en reemplazo de HOC, debe exportarse esta funcion StorageChangeAlert en lugar de StorageChangeAlertWithStorageListener. Asimismo, renderizar StorageChangeAlert en App.js. StorageChangeAlert debe recibir la prop syncBrowsertab y enviarsela a useStorageListener

  if (show) {
    return (
      <>
        <div className='container'>
          <div className='subcontainer'>
            <h3 className='message'>
              Your list is <span>outdated</span> .
            </h3>

            <button className='btn' onClick={() => toggleShow(false)}>
              Refresh
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export const StorageChangeAlertWithStorageListener =
  withStorageListener(StorageChangeAlert);

// StorageChangeAlert == WrappedComp

// StorageChangeAlertWithStorageListener == WrappedCompWithStorageListener --> A StorageChangeAlertWithStorageListener le paso syncBrowsertab en App.js para sincronizar

// onClick={() => toggleShow(false)} === setStorageChange(false) --> Escondemos la alerta de nuevos ToDos
