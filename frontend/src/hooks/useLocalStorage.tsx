import { useState } from 'react';

const useLocalStorage = (key: string, defaultValue: boolean | number) => {
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem(key);
    // return localData ? JSON.parse(localData) : defaultValue;
    return localData ? JSON.parse(localData) : defaultValue;
  });
  return [state, setState] as const;
}

export default useLocalStorage;