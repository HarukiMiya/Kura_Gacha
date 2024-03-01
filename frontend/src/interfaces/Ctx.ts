export interface Ctx {
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