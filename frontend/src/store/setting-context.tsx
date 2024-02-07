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
    isRemovedNigiriIkkan: boolean;
    setIsRemovedNigiriIkkan: Dispatch<SetStateAction<boolean>>;
    isRemovedGunkan: boolean;
    setIsRemovedGunkan: Dispatch<SetStateAction<boolean>>;
    isRemovedSide: boolean;
    setIsRemovedSide: Dispatch<SetStateAction<boolean>>;
    isRemovedDessert: boolean;
    setIsRemovedDessert: Dispatch<SetStateAction<boolean>>;
    desiredPrice: number;
    setDesiredPrice: Dispatch<SetStateAction<number>>;
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
    setIsRemovedNigiri: () => {},
    isRemovedNigiriIkkan: false,
    setIsRemovedNigiriIkkan: () => {},
    isRemovedGunkan: false,
    setIsRemovedGunkan: () => {},
    isRemovedSide: false,
    setIsRemovedSide: () => {},
    isRemovedDessert: false,
    setIsRemovedDessert: () => {},
    desiredPrice: 1000,
    setDesiredPrice: () => {},
});

