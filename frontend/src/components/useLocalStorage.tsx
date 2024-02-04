// import { useState } from 'react';

// function useLocalStorage<T>(key: string, initVal: boolean) {
//   // Get stored value from local storage or use initial value

// //   const [storedValue, setStoredValue] = useLocalStorage("key", initVal);

//   const [storedValue, setStoredValue] = useState<boolean>(() => {
//     try {
//       const item = localStorage.getItem(key);
//       return item ? JSON.parse(item) : initVal;
//     } catch (error) {
//       console.log(error);
//       return initVal;
//     }

//   // State to hold the current value
//   const [value, setValue] = useState<T>(storedValue);

//   // Update local storage and state when the value changes
//   const updateValue = (newValue: T) => {
//     setValue(newValue);
//     localStorage.setItem(key, JSON.stringify(newValue));
//   };

//   return [value, updateValue] as const;
// }

// export default useLocalStorage;