import { createContext, Dispatch, SetStateAction } from "react";


interface SettingContextProps {
    isExactPrice: boolean;
    setIsExactPrice: Dispatch<SetStateAction<boolean>>;
    isDuplicatable: boolean;
    setIsDuplicatable: Dispatch<SetStateAction<boolean>>;
    isMaxCal: boolean;
    setIsMaxCal: Dispatch<SetStateAction<boolean>>;
}
  
export const SettingContext = createContext<SettingContextProps>({
    isExactPrice: true,
    setIsExactPrice: () => {},
    isDuplicatable: true,
    setIsDuplicatable: () => {},
    isMaxCal: false,
    setIsMaxCal: () => {},
});

