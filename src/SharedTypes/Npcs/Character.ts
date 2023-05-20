import { NPC } from "./NPC";

interface Character extends NPC{
    spawnChunk: number;
    spawnPos: number;
    dialoguePath: string
}