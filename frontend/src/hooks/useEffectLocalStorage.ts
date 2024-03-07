import { useEffect, Dispatch, SetStateAction } from 'react';

export const useLocalStorageEffect = (key: string, setter: Dispatch<SetStateAction<boolean>>) => {
    useEffect(() => {
      const storedData = localStorage.getItem(key);
      if (storedData != null) {
        setter(JSON.parse(storedData));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};