import { Dispatch, SetStateAction } from "react";

export const handleToggle = (setter: Dispatch<SetStateAction<boolean>>) => {
    return () => {
        setter((prev: boolean) => !prev);
    };
};