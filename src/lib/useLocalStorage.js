import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      console.log(storedValue);
      return storedValue ? storedValue : initialValue;
    } catch (error) {
      console.error(`Error parsing ${key} from localStorage: ${error}`);
      return initialValue;
    }
  });

  useEffect(() => {
    const handleStorageChange = e => {
      if (e.key === key) {
        try {
          setValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error(`Error parsing ${key} from storage change: ${error}`);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  const setStoredValue = newValue => {
    try {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(`Error storing ${key} in localStorage: ${error}`);
    }
  };

  return [value, setStoredValue];
}

export default useLocalStorage;
