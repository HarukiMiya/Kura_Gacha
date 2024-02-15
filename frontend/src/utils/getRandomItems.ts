import data from '../../../data/data.json';
import { Sushi } from '../interfaces/Sushi';

export const getRandomItems = (
    isExactPrice: boolean, 
    isDuplicatable: boolean, 
    isMaxCal: boolean, 
    isRemovedAlco: boolean, 
    isRemovedNigiri: boolean, 
    isRemovedNigiriIkkan: boolean, 
    isRemovedGunkan: boolean, 
    isRemovedSide: boolean, 
    isRemovedDessert: boolean, 
    desiredPrice: number
    ): Sushi[] | null => {
    console.log("getRandomItems()");
    const sushiCombination: Sushi[] = [];
    const halfLen = data.length / 3
    let currentPrice = 0;
    let c = 1;
    
    while (currentPrice < desiredPrice) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const sushi: Sushi = data[randomIndex];
        const sushiPrice: number = sushi.item_price;

        if (!isDuplicatable && sushiCombination.some((item) => item === sushi)) {
            console.log("executed", sushiCombination, halfLen);
            c++;
            if (c > 50 || sushiCombination.length > halfLen) return null;
            continue;
        }
        sushiCombination.push(sushi);
        currentPrice += sushiPrice;
    }
    if (currentPrice === desiredPrice) {
        return sushiCombination;
    } else {
        return null;
    }
};