import { getRandomItems } from "./getRandomItems";
import { Item } from "../interfaces/Sushi";
import { Ctx } from "../interfaces/CTX";

export const getValidItems = (ctx:Ctx, setItems: React.Dispatch<React.SetStateAction<Item[]>>) => {
    for (let attempt = 0; attempt < 10000; attempt++) {
        const currItems = getRandomItems(
            ctx.isExactPrice,
            ctx.isDuplicatable,
            ctx.isMaxCal,
            ctx.isRemovedAlco,
            ctx.isRemovedNigiri,
            ctx.isRemovedNigiriIkkan,
            ctx.isRemovedGunkan,
            ctx.isRemovedSide,
            ctx.isRemovedDessert,
            ctx.desiredPrice
        );

        if (currItems) {
            setItems(currItems);
            return 'valid';
        }
    }
    return 'invalid';
};