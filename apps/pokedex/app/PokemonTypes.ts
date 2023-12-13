export interface move {
  name: string;
  move: { name: string };
}
export interface moveTypes extends Array<move> {}
export interface pokemon {
  id: number;
  name: string;
  height: number;
  moves: moveTypes;
}

export interface row {
  name: string;
  url: string;
}

export interface PokemanType {
  id: string;
  name: string;
  url: string;
}

export interface PokemansType extends Array<PokemanType> {}
