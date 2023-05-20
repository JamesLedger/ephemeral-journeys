import { Item } from "./item";

interface Weapon extends Item{
    damage : number;
    range : number;
    attackSpeed: number;
    attackAnimation: string;
}