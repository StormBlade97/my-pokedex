export interface NamedResource {
  name: string;
  url: string;
}
export interface PokemonAbility {
  id: number;
}
export interface PokemonStat {
  stat: NamedResource;
}
export interface PokemonForm {
  id: number;
}
export interface PokemonMove {
  id: number;
}
export interface PokemonType {
  slot: number;
  type: NamedResource;
}
export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  types: PokemonType[];
  forms: PokemonForm[];
  moves: PokemonMove[];
}
export interface PokemonShort {
  name: string;
  url: string;
}
