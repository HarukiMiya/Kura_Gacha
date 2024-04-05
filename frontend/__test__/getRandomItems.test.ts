import { describe, expect, it } from 'vitest';
import { Item } from '../src/interfaces/Item';
import { getRandomItems } from '../src/utils/getRandomItems';
import { ItemWithCount } from '../src/interfaces/ItemWithCount';
import { k } from 'vitest/dist/reporters-MmQN-57K';

interface Ctx {
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
}

const mockGetValidItems = (ctx:Ctx) => {
    let items: Item[];
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
        if (currItems.length != 0 && currItems[0].item_name === 'impossible') {
            impossible = true;
            return [];
        }
        if (currItems.length !== 0 && currItems[0].item_name !== 'impossible' && currItems[0].item_name !== 'invalid') {
            items = currItems;
            return items;
        }
    }
    return [];
};



describe("getRandomItems", () => {
    // isExactPrice: TRUE
    for (let i = 0; i < 1000; i++) {
        it(`isExactPrice:'true' & isDuplicatable:'true' & isMaxCal:'false' - Test 1.1`, () => {
            const ctx = {
                desiredPrice: 1000,
                isExactPrice: true,
                isDuplicatable: true,
                isMaxCal: false,
                isRemovedAlco: true,
                isRemovedNigiri: false,
                isRemovedNigiriIkkan: false,
                isRemovedGunkan: false,
                isRemovedSide: false,
                isRemovedDessert: false,
            };
            const items = mockGetValidItems(ctx);
            const totalPrice: number = items.reduce((acc, comb) => acc + comb.item_price, 0);
            expect(totalPrice).toBe(1000);
        });
    }
    for (let i = 0; i < 1000; i++) {
        it(`isExactPrice:'true' & isDuplicatable:'false' & isMaxCal:'false' - Test 1.2`, () => {
            const ctx = {
                desiredPrice: 1000,
                isExactPrice: true,
                isDuplicatable: false,
                isMaxCal: false,
                isRemovedAlco: true,
                isRemovedNigiri: false,
                isRemovedNigiriIkkan: false,
                isRemovedGunkan: false,
                isRemovedSide: false,
                isRemovedDessert: false,
            };
            const items = mockGetValidItems(ctx);
            const totalPrice: number = items.reduce((acc, comb) => acc + comb.item_price, 0);
            expect(totalPrice).toBe(1000);
        });
    }
    for (let i = 0; i < 1000; i++) {
        it(`isExactPrice:'true' & isDuplicatable:'true' & isMaxCal:'true' - Test 1.3`, () => {
            const ctx = {
                desiredPrice: 1000,
                isExactPrice: true,
                isDuplicatable: true,
                isMaxCal: true,
                isRemovedAlco: true,
                isRemovedNigiri: false,
                isRemovedNigiriIkkan: false,
                isRemovedGunkan: false,
                isRemovedSide: false,
                isRemovedDessert: false,
            };
            const items = mockGetValidItems(ctx);
            const totalPrice: number = items.reduce((acc, comb) => acc + comb.item_price, 0);
            expect(totalPrice).toBe(1000);
        });
    }
    for (let i = 0; i < 1000; i++) {
        it(`isExactPrice:'true' & isDuplicatable:'false' & isMaxCal:'true' - Test 1.4`, () => {
            const ctx = {
                desiredPrice: 1000,
                isExactPrice: true,
                isDuplicatable: false,
                isMaxCal: true,
                isRemovedAlco: true,
                isRemovedNigiri: false,
                isRemovedNigiriIkkan: false,
                isRemovedGunkan: false,
                isRemovedSide: false,
                isRemovedDessert: false,
            };
            const items = mockGetValidItems(ctx);
            const totalPrice: number = items.reduce((acc, comb) => acc + comb.item_price, 0);
            expect(totalPrice).toBe(1000);
        });
    }


    // isExactPrice: FALSE
    for (let i = 0; i < 1000; i++) {
        it(`isExactPrice:'false' & isDuplicatable:'true' & isMaxCal:'false' - Test 2.1`, () => {
            const ctx = {
                desiredPrice: 1000,
                isExactPrice: false,
                isDuplicatable: true,
                isMaxCal: false,
                isRemovedAlco: true,
                isRemovedNigiri: false,
                isRemovedNigiriIkkan: false,
                isRemovedGunkan: false,
                isRemovedSide: false,
                isRemovedDessert: false,
            };
            const items = mockGetValidItems(ctx);
            const totalPrice: number = items.reduce((acc, comb) => acc + comb.item_price, 0);
            expect(totalPrice).toBeGreaterThanOrEqual(950);
            expect(totalPrice).toBeLessThanOrEqual(1050);
        });
    }
    for (let i = 0; i < 1000; i++) {
        it(`isExactPrice:'false' & isDuplicatable:'false' & isMaxCal:'false' - Test 2.2`, () => {
            const ctx = {
                desiredPrice: 1000,
                isExactPrice: false,
                isDuplicatable: false,
                isMaxCal: false,
                isRemovedAlco: true,
                isRemovedNigiri: false,
                isRemovedNigiriIkkan: false,
                isRemovedGunkan: false,
                isRemovedSide: false,
                isRemovedDessert: false,
            };
            const items = mockGetValidItems(ctx);
            const totalPrice: number = items.reduce((acc, comb) => acc + comb.item_price, 0);
            expect(totalPrice).toBeGreaterThanOrEqual(950);
            expect(totalPrice).toBeLessThanOrEqual(1050);
        });
    }
    for (let i = 0; i < 1000; i++) {
        it(`isExactPrice:'false' & isDuplicatable:'false' & isMaxCal:'true' - Test 2.3`, () => {
            const ctx = {
                desiredPrice: 1000,
                isExactPrice: false,
                isDuplicatable: false,
                isMaxCal: true,
                isRemovedAlco: true,
                isRemovedNigiri: false,
                isRemovedNigiriIkkan: false,
                isRemovedGunkan: false,
                isRemovedSide: false,
                isRemovedDessert: false,
            };
            const items = mockGetValidItems(ctx);
            const totalPrice: number = items.reduce((acc, comb) => acc + comb.item_price, 0);
            expect(totalPrice).toBeGreaterThanOrEqual(900);
            expect(totalPrice).toBeLessThanOrEqual(1100);
        });
    }
    for (let i = 0; i < 1000; i++) {
        it(`isExactPrice:'false' & isDuplicatable:'true' & isMaxCal:'true' - Test 2.4`, () => {
            const ctx = {
                desiredPrice: 1000,
                isExactPrice: false,
                isDuplicatable: true,
                isMaxCal: true,
                isRemovedAlco: true,
                isRemovedNigiri: false,
                isRemovedNigiriIkkan: false,
                isRemovedGunkan: false,
                isRemovedSide: false,
                isRemovedDessert: false,
            };
            const items = mockGetValidItems(ctx);
            const totalPrice: number = items.reduce((acc, comb) => acc + comb.item_price, 0);
            expect(totalPrice).toBeGreaterThanOrEqual(900);
            expect(totalPrice).toBeLessThanOrEqual(1100);
        });
    }

    for (let i = 0; i < 1000; i++) {
        it(`isExactPrice:'false' & isDuplicatable:'false' & isMaxCal:'false' - Test 3.1`, () => {
            const ctx = {
                desiredPrice: 5000,
                isExactPrice: true,
                isDuplicatable: true,
                isMaxCal: false,
                isRemovedAlco: true,
                isRemovedNigiri: false,
                isRemovedNigiriIkkan: false,
                isRemovedGunkan: false,
                isRemovedSide: false,
                isRemovedDessert: false,
            };
            const items = mockGetValidItems(ctx);
            console.log(items);
            const groupedByCategoryTemp: { [key: string]: ItemWithCount[] }  = {};
            items.forEach(item => {
                if (!groupedByCategoryTemp[item.item_category]) {
                    groupedByCategoryTemp[item.item_category] = [{ ...item, count: 1 }];
                }
                else {
                    const existingItem = groupedByCategoryTemp[item.item_category].find(existing => existing.item_name === item.item_name);
                    if (existingItem) {
                        existingItem.count += 1;
                    } else {
                        groupedByCategoryTemp[item.item_category].push({ ...item, count: 1 });
                    }
                }
            });
            Object.keys(groupedByCategoryTemp).forEach((category) => {
                groupedByCategoryTemp[category].forEach((item) =>(
                    expect(item.count).toBe(1)
                ));
            })
        });
    }

    for (let i = 0; i < 1000; i++) {
        it(`isExactPrice:'false' & isDuplicatable:'false' & isMaxCal:'false' - Test 3.2`, () => {
            const ctx = {
                desiredPrice: 10000,
                isExactPrice: true,
                isDuplicatable: true,
                isMaxCal: false,
                isRemovedAlco: true,
                isRemovedNigiri: false,
                isRemovedNigiriIkkan: false,
                isRemovedGunkan: false,
                isRemovedSide: false,
                isRemovedDessert: false,
            };
            const items = mockGetValidItems(ctx);
            console.log(items);
            const groupedByCategoryTemp: { [key: string]: ItemWithCount[] }  = {};
            items.forEach(item => {
                if (!groupedByCategoryTemp[item.item_category]) {
                    groupedByCategoryTemp[item.item_category] = [{ ...item, count: 1 }];
                }
                else {
                    const existingItem = groupedByCategoryTemp[item.item_category].find(existing => existing.item_name === item.item_name);
                    if (existingItem) {
                        existingItem.count += 1;
                    } else {
                        groupedByCategoryTemp[item.item_category].push({ ...item, count: 1 });
                    }
                }
            });
            Object.keys(groupedByCategoryTemp).forEach((category) => {
                groupedByCategoryTemp[category].forEach((item) =>(
                    expect(item.count).toBe(1)
                ));
            })
        });
    }

    for (let i = 0; i < 1000; i++) {
        it(`isExactPrice:'false' & isDuplicatable:'false' & isMaxCal:'true' - Test 3.3`, () => {
            const ctx = {
                desiredPrice: 5000,
                isExactPrice: false,
                isDuplicatable: false,
                isMaxCal: true,
                isRemovedAlco: true,
                isRemovedNigiri: false,
                isRemovedNigiriIkkan: false,
                isRemovedGunkan: false,
                isRemovedSide: false,
                isRemovedDessert: false,
            };
            const items = mockGetValidItems(ctx);
            console.log(items);
            const groupedByCategoryTemp: { [key: string]: ItemWithCount[] }  = {};
            items.forEach(item => {
                if (!groupedByCategoryTemp[item.item_category]) {
                    groupedByCategoryTemp[item.item_category] = [{ ...item, count: 1 }];
                }
                else {
                    const existingItem = groupedByCategoryTemp[item.item_category].find(existing => existing.item_name === item.item_name);
                    if (existingItem) {
                        existingItem.count += 1;
                    } else {
                        groupedByCategoryTemp[item.item_category].push({ ...item, count: 1 });
                    }
                }
            });
            Object.keys(groupedByCategoryTemp).forEach((category) => {
                groupedByCategoryTemp[category].forEach((item) =>(
                    expect(item.count).toBe(1)
                ));
            })
        });
    }

    for (let i = 0; i < 1000; i++) {
        it(`isExactPrice:'false' & isDuplicatable:'false' & isMaxCal:'true' - Test 3.4`, () => {
            const ctx = {
                desiredPrice: 10000,
                isExactPrice: false,
                isDuplicatable: false,
                isMaxCal: true,
                isRemovedAlco: true,
                isRemovedNigiri: false,
                isRemovedNigiriIkkan: false,
                isRemovedGunkan: false,
                isRemovedSide: false,
                isRemovedDessert: false,
            };
            const items = mockGetValidItems(ctx);
            console.log(items);
            const groupedByCategoryTemp: { [key: string]: ItemWithCount[] }  = {};
            items.forEach(item => {
                if (!groupedByCategoryTemp[item.item_category]) {
                    groupedByCategoryTemp[item.item_category] = [{ ...item, count: 1 }];
                }
                else {
                    const existingItem = groupedByCategoryTemp[item.item_category].find(existing => existing.item_name === item.item_name);
                    if (existingItem) {
                        existingItem.count += 1;
                    } else {
                        groupedByCategoryTemp[item.item_category].push({ ...item, count: 1 });
                    }
                }
            });

            Object.keys(groupedByCategoryTemp).forEach((category) => {
                groupedByCategoryTemp[category].forEach((item) =>(
                    expect(item.count).toBe(1)
                ));
            })
        });
    }
})