import { useState } from 'react';

const useLocalStorageBoolean = (key: string, defaultValue: boolean) => {
  const [state, setState] = useState<boolean>(() => {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : defaultValue;
  });
  return [state, setState] as const;
}

export default useLocalStorageBoolean;