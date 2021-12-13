import { useState } from "react";

// HOC a Custom Hook
export function useStorageListener(syncBrowsertab) {
  const [storageChange, setStorageChange] = useState(false); 
  
  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V2") {
      console.log(`Hubo cambios en ${change.key}`);
      
      setStorageChange(true);
    }
  });
  
  const toggleShow = () => {
    syncBrowsertab();
    setStorageChange(false);
  };
  
  return {
    show: storageChange,
    toggleShow,
  };
}

// HOC a Custom Hook:
// 1) Cambiamos el nombre de with... a use...
// 2) Sacamos las funciones internas y dejamos solamente la lógica
// 3) Devolvemos las propiedades a compartir en el return
