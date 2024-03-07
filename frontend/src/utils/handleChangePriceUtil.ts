import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export const handleChangePriceUtil = (e: ChangeEvent<HTMLInputElement>, setTempPrice: Dispatch<SetStateAction<number>>) => {
    if (isNaN(Number(e.target.value))) {
        setTempPrice(0);
    } else if (Number(e.target.value) > 10000) {
        setTempPrice(10000);
    } else {
        setTempPrice(Number(e.target.value));
    }
};