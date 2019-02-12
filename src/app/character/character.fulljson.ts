// export interface Character {
//     lastModified: number;
//     name: string;
//     realm: string;
//     battlegroup: string;
//     class: number;
//     race: number;
//     gender: number;
//     level: number;
//     achievementPoints: number;
//     thumbnail: string;
//     calcClass: string;
//     faction: number;
//     items: Items;
//     totalHonorableKills: number;
//   }
//   export interface Items {
//     averageItemLevel: number;
//     averageItemLevelEquipped: number;
//     head: HeadOrShoulderOrChest;
//     neck: NeckOrTrinket2;
//     shoulder: HeadOrShoulderOrChest;
//     back: Back;
//     chest: HeadOrShoulderOrChest;
//     wrist: WristOrWaistOrLegs;
//     hands: HandsOrFeetOrOffHand;
//     waist: WristOrWaistOrLegs;
//     legs: WristOrWaistOrLegs;
//     feet: HandsOrFeetOrOffHand;
//     finger1: Finger1OrFinger2;
//     finger2: Finger1OrFinger2;
//     trinket1: Trinket1;
//     trinket2: NeckOrTrinket2;
//     mainHand: MainHand;
//     offHand: HandsOrFeetOrOffHand;
//   }
//   export interface HeadOrShoulderOrChest {
//     id: number;
//     name: string;
//     icon: string;
//     quality: number;
//     itemLevel: number;
//     tooltipParams: TooltipParams;
//     stats?: (StatsEntity)[] | null;
//     armor: number;
//     context: string;
//     bonusLists?: (number)[] | null;
//     artifactId: number;
//     displayInfoId: number;
//     artifactAppearanceId: number;
//     artifactTraits?: (null)[] | null;
//     relics?: (null)[] | null;
//     appearance: Appearance;
//     azeriteItem: AzeriteItem;
//     azeriteEmpoweredItem: AzeriteEmpoweredItem;
//   }
//   export interface TooltipParams {
//     transmogItem: number;
//     timewalkerLevel: number;
//     azeritePower0: number;
//     azeritePower1: number;
//     azeritePower2: number;
//     azeritePower3: number;
//     azeritePowerLevel: number;
//     azeritePower4: number;
//   }
//   export interface StatsEntity {
//     stat: number;
//     amount: number;
//   }
//   export interface Appearance {
//     itemId: number;
//     itemAppearanceModId: number;
//     transmogItemAppearanceModId: number;
//   }
//   export interface AzeriteItem {
//     azeriteLevel: number;
//     azeriteExperience: number;
//     azeriteExperienceRemaining: number;
//   }
//   export interface AzeriteEmpoweredItem {
//     azeritePowers?: (AzeritePowersEntity)[] | null;
//   }
//   export interface AzeritePowersEntity {
//     id: number;
//     tier: number;
//     spellId: number;
//     bonusListId: number;
//   }
//   export interface NeckOrTrinket2 {
//     id: number;
//     name: string;
//     icon: string;
//     quality: number;
//     itemLevel: number;
//     tooltipParams: TooltipParams1;
//     stats?: (StatsEntity)[] | null;
//     armor: number;
//     context: string;
//     bonusLists?: (number)[] | null;
//     artifactId: number;
//     displayInfoId: number;
//     artifactAppearanceId: number;
//     artifactTraits?: (null)[] | null;
//     relics?: (null)[] | null;
//     appearance: Appearance1;
//     azeriteItem: AzeriteItem;
//     azeriteEmpoweredItem: AzeriteEmpoweredItem1;
//   }
//   export interface TooltipParams1 {
//     timewalkerLevel: number;
//     azeritePower0: number;
//     azeritePower1: number;
//     azeritePower2: number;
//     azeritePower3: number;
//     azeritePowerLevel: number;
//     azeritePower4: number;
//   }
//   export interface Appearance1 {
//   }
//   export interface AzeriteEmpoweredItem1 {
//     azeritePowers?: (null)[] | null;
//   }
//   export interface Back {
//     id: number;
//     name: string;
//     icon: string;
//     quality: number;
//     itemLevel: number;
//     tooltipParams: TooltipParams2;
//     stats?: (StatsEntity)[] | null;
//     armor: number;
//     context: string;
//     bonusLists?: (number)[] | null;
//     artifactId: number;
//     displayInfoId: number;
//     artifactAppearanceId: number;
//     artifactTraits?: (null)[] | null;
//     relics?: (null)[] | null;
//     appearance: Appearance2;
//     azeriteItem: AzeriteItem;
//     azeriteEmpoweredItem: AzeriteEmpoweredItem1;
//   }
//   export interface TooltipParams2 {
//     gem0: number;
//     timewalkerLevel: number;
//     azeritePower0: number;
//     azeritePower1: number;
//     azeritePower2: number;
//     azeritePower3: number;
//     azeritePowerLevel: number;
//     azeritePower4: number;
//   }
//   export interface Appearance2 {
//     itemAppearanceModId: number;
//   }
//   export interface WristOrWaistOrLegs {
//     id: number;
//     name: string;
//     icon: string;
//     quality: number;
//     itemLevel: number;
//     tooltipParams: TooltipParams;
//     stats?: (StatsEntity)[] | null;
//     armor: number;
//     context: string;
//     bonusLists?: (number)[] | null;
//     artifactId: number;
//     displayInfoId: number;
//     artifactAppearanceId: number;
//     artifactTraits?: (null)[] | null;
//     relics?: (null)[] | null;
//     appearance: Appearance;
//     azeriteItem: AzeriteItem;
//     azeriteEmpoweredItem: AzeriteEmpoweredItem1;
//   }
//   export interface HandsOrFeetOrOffHand {
//     id: number;
//     name: string;
//     icon: string;
//     quality: number;
//     itemLevel: number;
//     tooltipParams: TooltipParams1;
//     stats?: (StatsEntity)[] | null;
//     armor: number;
//     context: string;
//     bonusLists?: (number)[] | null;
//     artifactId: number;
//     displayInfoId: number;
//     artifactAppearanceId: number;
//     artifactTraits?: (null)[] | null;
//     relics?: (null)[] | null;
//     appearance: Appearance2;
//     azeriteItem: AzeriteItem;
//     azeriteEmpoweredItem: AzeriteEmpoweredItem1;
//   }
//   export interface Finger1OrFinger2 {
//     id: number;
//     name: string;
//     icon: string;
//     quality: number;
//     itemLevel: number;
//     tooltipParams: TooltipParams3;
//     stats?: (StatsEntity)[] | null;
//     armor: number;
//     context: string;
//     bonusLists?: (number)[] | null;
//     artifactId: number;
//     displayInfoId: number;
//     artifactAppearanceId: number;
//     artifactTraits?: (null)[] | null;
//     relics?: (null)[] | null;
//     appearance: Appearance3;
//     azeriteItem: AzeriteItem;
//     azeriteEmpoweredItem: AzeriteEmpoweredItem1;
//   }
//   export interface TooltipParams3 {
//     enchant: number;
//     timewalkerLevel: number;
//     azeritePower0: number;
//     azeritePower1: number;
//     azeritePower2: number;
//     azeritePower3: number;
//     azeritePowerLevel: number;
//     azeritePower4: number;
//   }
//   export interface Appearance3 {
//     enchantDisplayInfoId: number;
//   }
//   export interface Trinket1 {
//     id: number;
//     name: string;
//     icon: string;
//     quality: number;
//     itemLevel: number;
//     tooltipParams: TooltipParams4;
//     stats?: (StatsEntity)[] | null;
//     armor: number;
//     context: string;
//     bonusLists?: (number)[] | null;
//     artifactId: number;
//     displayInfoId: number;
//     artifactAppearanceId: number;
//     artifactTraits?: (null)[] | null;
//     relics?: (null)[] | null;
//     appearance: Appearance1;
//     azeriteItem: AzeriteItem;
//     azeriteEmpoweredItem: AzeriteEmpoweredItem1;
//   }
//   export interface TooltipParams4 {
//     set?: (number)[] | null;
//     timewalkerLevel: number;
//     azeritePower0: number;
//     azeritePower1: number;
//     azeritePower2: number;
//     azeritePower3: number;
//     azeritePowerLevel: number;
//     azeritePower4: number;
//   }
//   export interface MainHand {
//     id: number;
//     name: string;
//     icon: string;
//     quality: number;
//     itemLevel: number;
//     tooltipParams: TooltipParams1;
//     stats?: (StatsEntity)[] | null;
//     armor: number;
//     weaponInfo: WeaponInfo;
//     context: string;
//     bonusLists?: (number)[] | null;
//     artifactId: number;
//     displayInfoId: number;
//     artifactAppearanceId: number;
//     artifactTraits?: (null)[] | null;
//     relics?: (null)[] | null;
//     appearance: Appearance2;
//     azeriteItem: AzeriteItem;
//     azeriteEmpoweredItem: AzeriteEmpoweredItem1;
//   }
//   export interface WeaponInfo {
//     damage: Damage;
//     weaponSpeed: number;
//     dps: number;
//   }
//   export interface Damage {
//     min: number;
//     max: number;
//     exactMin: number;
//     exactMax: number;
//   }
  