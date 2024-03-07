import { Dispatch, SetStateAction } from "react";
import { getValidItems } from "./getValidItems";
import { Item } from "../interfaces/Item";
import { SettingContextProps } from "../store/setting-context";

export const handleClickOpenMainButton = (
    ctx: SettingContextProps, 
    setItems: Dispatch<SetStateAction<Item[]>>, 
    setOpen: Dispatch<SetStateAction<boolean>>, 
    setValid: Dispatch<SetStateAction<string>>) => {
        setItems([]);
        setOpen(true);
        ctx.setWaiting(true);
        setTimeout(async () => {
            setValid(getValidItems(ctx, setItems));
            ctx.setWaiting(false);
        }, 500);
};