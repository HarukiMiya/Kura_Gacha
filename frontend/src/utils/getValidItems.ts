import { getRandomItems } from "./getRandomItems";
import { Item } from "../interfaces/Sushi";
import { Ctx } from "../interfaces/Ctx";

export const getValidItems = (ctx:Ctx, setItems: React.Dispatch<React.SetStateAction<Item[]>>) => {
    let impossible: boolean = false;
    for (let attempt = 0; attempt < 10000; attempt++) {
        if (impossible) break;
        const currItems: Item[]| undefined = getRandomItems(
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
        console.log("currItems",currItems);
        if (currItems.length != 0 && currItems[0].item_name == 'impossible') {
            console.log("currItems", currItems)
            console.log(currItems === undefined)
            impossible = true;
            return 'impossible';
        }
        if (currItems.length != 0 && currItems[0].item_name != 'impossible' && currItems[0].item_name != 'invalid') {
            setItems(currItems);
            return 'valid';
        }
    }
    return 'invalid';
};