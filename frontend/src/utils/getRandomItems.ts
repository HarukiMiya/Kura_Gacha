import data from '../../../data/data.json';
import { Item } from '../interfaces/Sushi';

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
    ): Item[] | null => {
    console.log("getRandomItems()");
    const sushiCombination: Item[] = [];
    const limit = data.length / 3
    let currentPrice = 0;
    let c = 1;

    const filteredData = data.filter(item => {
        if (isRemovedAlco && item.is_alcohol) return false;
        if (isRemovedNigiri && item.item_category == "にぎり") return false;
        if (isRemovedNigiriIkkan && item.item_category == "にぎり一貫") return false;
        if (isRemovedGunkan && item.item_category == "ぐんかん・細巻") return false;
        if (isRemovedSide && item.item_category == "サイドメニュー") return false;
        if (isRemovedDessert && item.item_category == "デザート") return false;
        return true;
    });
    if (!filteredData.length) return null;

    while (currentPrice < desiredPrice) {
        const randomIndex: number = Math.floor(Math.random() * filteredData.length);
        const sushi: Item = filteredData[randomIndex];
        const sushiPrice: number = sushi.item_price;

        if (!isDuplicatable && sushiCombination.some((item) => item == sushi)) {
            console.log("executed", sushiCombination, limit);
            c++;
            if (c > 50 || sushiCombination.length > limit) return null;
            continue;
        }
        sushiCombination.push(sushi);
        currentPrice += sushiPrice;
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