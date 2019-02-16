import {Item} from '../character/character';
export class Boss
{
    name: string;
    id: number;
    zoneId: number;
    items?: Item[] | null;
}