import { createContext, Dispatch, SetStateAction } from "react";


interface SettingContextProps {
    isExactPrice: boolean;
    setIsExactPrice: Dispatch<SetStateAction<boolean>>;
}
  
export const SettingContext = createContext<SettingContextProps>({
    isExactPrice: true,
    setIsExactPrice: () => {},
});

