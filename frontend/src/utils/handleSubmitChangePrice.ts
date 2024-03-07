import { FormEvent, Dispatch, SetStateAction } from 'react';

export const handleSubmitChangePrice = (
    e: FormEvent<HTMLFormElement>, 
    setDesiredPrice: Dispatch<SetStateAction<number>>, 
    setTempPrice: Dispatch<SetStateAction<number>>, 
    setIsChangeable: Dispatch<SetStateAction<boolean>>) => {
        e.preventDefault();
        setDesiredPrice(Number((e.currentTarget.elements[0] as HTMLInputElement).value));
        setTempPrice(Number((e.currentTarget.elements[0] as HTMLInputElement).value));
        setIsChangeable((prev: boolean) => !prev);
}