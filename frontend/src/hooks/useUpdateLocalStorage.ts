import { useEffect } from 'react';

export const useUpdateLocalStorage = (key: string, value: boolean | number) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
};