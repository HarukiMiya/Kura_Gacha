import { createContext, Dispatch, SetStateAction } from "react";


interface SettingContextProps {
    isExactPrice: boolean;
    setIsExactPrice: Dispatch<SetStateAction<boolean>>;
    isDuplicatable: boolean;
    setIsDuplicatable: Dispatch<SetStateAction<boolean>>;
    isMaxCal: boolean;
    setIsMaxCal: Dispatch<SetStateAction<boolean>>;
    isRemovedAlco: boolean;
    setIsRemovedAlco: Dispatch<SetStateAction<boolean>>;
    isRemovedNigiri: boolean;
    setIsRemovedNigiri: Dispatch<SetStateAction<boolean>>;
}
  
export const SettingContext = createContext<SettingContextProps>({
    isExactPrice: true,
    setIsExactPrice: () => {},
    isDuplicatable: true,
    setIsDuplicatable: () => {},
    isMaxCal: false,
    setIsMaxCal: () => {},
    isRemovedAlco: true,
    setIsRemovedAlco: () => {},
    isRemovedNigiri: false,
    setIsRemovedNigiri: () => {}
});

