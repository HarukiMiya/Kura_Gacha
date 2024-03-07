import { useState, useEffect } from 'react';

const useLocalStorageNumber = (key: string, defaultValue: number) => {
  const [state, setState] = useState<number>(() => {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState] as const;
}

export default useLocalStorageNumber;