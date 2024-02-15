import { getRandomItems } from "./getRandomItems";
import { Sushi } from "../interfaces/Sushi";

interface ctx {
    isExactPrice: boolean,
    isDuplicatable: boolean,
    isMaxCal: boolean,
    isRemovedAlco: boolean,
    isRemovedNigiri: boolean,
    isRemovedNigiriIkkan: boolean,
    isRemovedGunkan: boolean,
    isRemovedSide: boolean,
    isRemovedDessert: boolean,
    desiredPrice: number,
    waiting: boolean,
    setWaiting: React.Dispatch<React.SetStateAction<boolean>>
}

export const getValidItems = (ctx:ctx, setItems: React.Dispatch<React.SetStateAction<Sushi[]>>) => {
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