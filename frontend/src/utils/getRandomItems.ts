import data from '../../../data/data.json';
import { Item } from '../interfaces/Item';
import { getMaxCalItems } from './getMaxCalItems';

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
    ): Item[] => {
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
    if (!filteredData.length) return [];

    if (isMaxCal) {
        const result = getMaxCalItems(
            filteredData,
            isExactPrice, 
            isDuplicatable, 
            desiredPrice)
        if (result != "impossible" && result != "invalid") {
            return result;
        } else if (result == "invalid") {
            return [{item_name:'invalid', item_price:0, item_kcal:0, item_category:'', is_alcohol:false }]
        } else {
            return [{item_name:'impossible', item_price:0, item_kcal:0, item_category:'', is_alcohol:false }];
        }
    }

    while (currentPrice < desiredPrice) {
        const randomIndex: number = Math.floor(Math.random() * filteredData.length);
        const sushi: Item = filteredData[randomIndex];
        const sushiPrice: number = sushi.item_price;

        if (!isDuplicatable && sushiCombination.some((item) => item == sushi)) {
            console.log("executed", sushiCombination, limit);
            c++;
            if (c > 50 || sushiCombination.length > limit) return [];
            continue;
        }
        sushiCombination.push(sushi);
        currentPrice += sushiPrice;
    }

    if (isExactPrice) {
        if (currentPrice == desiredPrice) {
            return sushiCombination;
        } else {
            return [{item_name:'invalid', item_price:0, item_kcal:0, item_category:'', is_alcohol:false }];
        }
    } else {
        if (desiredPrice - 50 <= currentPrice && currentPrice <= desiredPrice + 50) {
            return sushiCombination;
        } else {
            return [{item_name:'invalid', item_price:0, item_kcal:0, item_category:'', is_alcohol:false }];
        }
    }
};