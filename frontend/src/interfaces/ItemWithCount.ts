import { Item } from "./Item";

export interface ItemWithCount extends Item {
    count: number;
}