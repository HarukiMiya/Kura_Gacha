import { useEffect, useState } from "react";
import { Item } from "../interfaces/Item";
import { ItemWithCount } from "../interfaces/ItemWithCount";

interface Totals {
    totPrice: number;
    totCal: number;
    groupedByCategory: { [key: string]: ItemWithCount[] };
}
export const useResult = (items:Item[]) => {
    const [totals, setTotals] = useState<Totals>({
        totPrice: 0,
        totCal: 0,
        groupedByCategory: {},
    });

    useEffect(() => {
        console.log("items", items);
        const totPrice = items.reduce((acc, comb) => acc + comb.item_price, 0);
        const totCal = items.reduce((acc, comb) => acc + comb.item_kcal, 0);
        
        const groupedByCategoryTemp: { [key: string]: ItemWithCount[] }  = {};
        items.forEach(item => {
            if (!groupedByCategoryTemp[item.item_category]) {
                groupedByCategoryTemp[item.item_category] = [{ ...item, count: 1 }];
            }
            else {
                const existingItem = groupedByCategoryTemp[item.item_category].find(existing => existing.item_name == item.item_name);
                if (existingItem) {
                    existingItem.count += 1;
                } else {
                    groupedByCategoryTemp[item.item_category].push({ ...item, count: 1 });
                }
            }
        });
        setTotals({ totPrice, totCal, groupedByCategory: groupedByCategoryTemp });
    }, [items]);
    return totals;
}