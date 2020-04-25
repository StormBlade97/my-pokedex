declare module "pokeapi-js-wrapper" {
  class Pokedex {
    getPokemonsList(): Promise<any>;
    getPokemonByName(id: any): Promise<any>;
  }
}
