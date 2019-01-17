import {Stat} from './stat';
import {Slot} from './slot';

export class Item {
  id: number
  name: string
  itemSlot: Slot
  itemLevel: number
  stats: Stat[]
  bonusLists: number[]  
}