import { UniqueCombination } from "../interfaces/UniqueCombination";
import { MaxCombsWithCals } from "../interfaces/MaxCombsWithCals";


export const findMaxCalsCombinationsNotDuplicatable = (uniqueCombinations: UniqueCombination[], desiredPrice: number): MaxCombsWithCals => {
    // 0/1 Knapsack
    const n: number = uniqueCombinations.length;
    const dp: number[][] = new Array(n).fill(0).map(() => new Array(desiredPrice + 1).fill(0));

    const initItem: UniqueCombination = uniqueCombinations[0];
    for (let j: number = 0; j <= desiredPrice; j++) {
        if (initItem.item_price <= j) {
            dp[0][j] = initItem.item_kcal;
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j <= desiredPrice; j++) {
            const currentItem: UniqueCombination = uniqueCombinations[i];
            const remainingPrice: number = j - currentItem.item_price;

            const skip = dp[i - 1][j];
            const include = (remainingPrice >= 0) ? currentItem.item_kcal + dp[i - 1][remainingPrice] : 0;
            dp[i][j] = Math.max(include, skip);
        }
    }

    const maxCalCombs: UniqueCombination[] = [];
    let i: number = n - 1;
    let j: number = desiredPrice;

    while (i > 0 && j > 0) {
        const currentItem: UniqueCombination = uniqueCombinations[i];
        if (dp[i][j] != dp[i - 1][j]) {
            maxCalCombs.push(currentItem);
            j -= currentItem.item_price;
        }
        i--;
    }

    return maxCalCombs;
}