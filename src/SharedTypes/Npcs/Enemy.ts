import { NPC } from "./NPC";

interface Enemy extends NPC{
    spawnChunk: number;
    spawnPos: number;
    dialoguePath: string
}