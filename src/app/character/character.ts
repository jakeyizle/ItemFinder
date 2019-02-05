export interface Character {
  items: Items;
}
export interface Items {
  head: Item;
  neck: Item;
  shoulder: Item;
  back: Item;
  chest: Item;
  wrist: Item;
  hands: Item;
  waist: Item;
  legs: Item;
  feet: Item;
  finger1: Item;
  finger2: Item;
  trinket1: Item;
  trinket2: Item;
  mainHand: Item;
  offHand: Item;
}
export interface Item {
  id: number;
  name: string;
  stats?: (StatsEntity)[] | null;
  armor: number;
  bonusLists?: (number)[] | null;
}
export interface StatsEntity {
  stat: number;
  amount: number;
}
