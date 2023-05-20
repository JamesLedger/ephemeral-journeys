import { Item } from "./Item";

interface Weapon extends Item{
    damage : number;
    range : number;
    attackSpeed: number;
    attackAnimation: string;
}