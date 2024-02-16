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
    const limit = data.length / 3
    let currentPrice = 0;
    let c = 1;

    while (currentPrice < desiredPrice) {
        const randomIndex: number = Math.floor(Math.random() * data.length);
        const sushi: Sushi = data[randomIndex];
        const sushiPrice: number = sushi.item_price;

        if (!isDuplicatable && sushiCombination.some((item) => item === sushi)) {
            console.log("executed", sushiCombination, limit);
            c++;
            if (c > 50 || sushiCombination.length > limit) return null;
            continue;
        }
        if (!isRemovedAlco || (isRemovedAlco && sushi.is_alcohol === false)) {
            sushiCombination.push(sushi);
            currentPrice += sushiPrice;
        }
    }
    if (isExactPrice) {
        if (currentPrice === desiredPrice) {
            return sushiCombination;
        } else {
            return null;
        }
    } else {
        if (desiredPrice - 50 <= currentPrice && currentPrice <= desiredPrice + 50) {
            return sushiCombination;
        } else {
            return null;
        }
    }
};