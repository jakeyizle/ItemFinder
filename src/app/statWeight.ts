

export class StatWeight {
  id: number[];
  weight: number;
  name: string;

  constructor(ids: number[], name: string) {
    this.id = ids;
    this.name = name;
  }
}