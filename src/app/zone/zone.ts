import {Boss} from '../boss/boss';
export class Zone
{
    id: number;
    name: string;
    isRaid: boolean;
    bosses?: Boss[] | null;
    itemCount?: number | null;
}

