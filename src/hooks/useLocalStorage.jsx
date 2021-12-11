import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [syncItems, setSyncItems] = useState(true); // Este estado nos va a informar si estamos o no sincronizados con todas las pestañas de nuestro browser que tengan la TodoList. Por defecto lo estamos.

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));

          parsedItem = initialValue;
        }

        setItem(parsedItem);

        setLoading(false);
        
        setSyncItems(true); // Una vez sincronizado, es true.
      } catch (error) {
        setError(error);
        console.error();
      }
    }, 500);
  }, [syncItems]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));

      setItem(newItem);
    } catch (error) {
      setError(error);
      console.error();
    }
  };

  const syncBrowsertab = () => {
    setLoading(true);
    setSyncItems(false);
  };

  return { item, saveItem, loading, error, syncBrowsertab };
}
