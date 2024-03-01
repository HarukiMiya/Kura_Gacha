import { Item } from '../interfaces/Sushi';
import originalData from '../../../data/data.json'
import { findMaxCalsCombinationsDuplicatable } from './findMaxCalsCombinationsDuplicatable';
import { findMaxCalsCombinationsNotDuplicatable } from './findMaxCalsCombinationsNotDuplicatable';
import { UniqueCombination } from '../interfaces/UniqueCombination';
import { MaxCombsWithCals } from '../interfaces/MaxCombsWithCals';

export const getMaxCalItems = 
    (filteredData: Item[],
    isExactPrice: boolean, 
    isDuplicatable: boolean, 
    desiredPrice: number) => {
    
    const uniqueCombinations: UniqueCombination[] = [];
    const result: Item[] = [];
    
    // make uniqueCombinations for price and kcal from filteredData 
    // it's gonna be like: [{item_price:x, item_kcal:y}, ...]
    filteredData.forEach((item: Item) => {
        const combination: UniqueCombination = { item_price: item.item_price, item_kcal: item.item_kcal };
        if (!uniqueCombinations.some((existingCombination) =>
            existingCombination.item_price == combination.item_price && existingCombination.item_kcal == combination.item_kcal
        )) {
            uniqueCombinations.push(combination);
        }
    });

    desiredPrice = isExactPrice ? desiredPrice : Math.floor(Math.random() * (100 + 1)) + (desiredPrice - 50);
    desiredPrice = (desiredPrice < 0) ? 0 : desiredPrice;
    // findMaxCalsCombinationsDuplicatable is Unbounded Knapsack
    // findMaxCalsCombinationsNotDuplicatable is 0/1 Knapsack
    const maxPriceCalCombs: MaxCombsWithCals = isDuplicatable 
    ? findMaxCalsCombinationsDuplicatable(filteredData, desiredPrice) 
    : findMaxCalsCombinationsNotDuplicatable(filteredData, desiredPrice);

    for (const comb of maxPriceCalCombs) {
        const matchingItems: Item[] = filteredData.filter((item: Item) => item.item_price == comb.item_price && item.item_kcal == comb.item_kcal);

        if (matchingItems.length > 0) {
            const chosenItem: Item = matchingItems[Math.floor(Math.random() * matchingItems.length)];
            result.push(chosenItem);
        }
    }

    const totalPrice: number = result.reduce((acc: number, comb: Item) => acc + comb.item_price, 0);
    const minPrice: number = Math.min(...originalData.map((item: Item) => item.item_price));
    const maxPrice: number = originalData.reduce((sum: number, item: Item) => sum + item.item_price, 0);

    if (isExactPrice && desiredPrice != totalPrice) {
        return 'impossible';
    }
    if (!isDuplicatable && (desiredPrice > maxPrice + 100 || desiredPrice < minPrice - 100)) {
        return 'impossible';
    }
    if (minPrice > desiredPrice) {
        return 'invalid';
    }
    return result;
}