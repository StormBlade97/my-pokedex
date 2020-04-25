<template>
  <section class="section">
    <div class="container">
      <p class="title">Pokemon list</p>
      <p>
        This page list every kind of pokemon there is with lots of poop💩💩💩.
      </p>
      <section class="section">
        <div v-if="hasPokenMon" class="columns is-multiline">
          <div
            v-for="pokemon in repository.sort(pokemon => p)"
            class="column is-one-quarter"
            :key="pokemon.name"
          >
            <PokemonCard :pokemon="pokemon"></PokemonCard>
          </div>
          <button @click="loadPrevPage" class="button">Prev</button>
          <button @click="loadNextPage" class="button">Next</button>
        </div>
        <div v-else>
          <p class="subtitle">No pokemon loaded</p>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Pokedex } from "@/util/pokedex";
import { Pokemon } from "@/types/Pokemon";
import { PromiseState } from "@/types/PromiseState";
import PokemonCard from "@/components/PokemonCard.vue";

@Component({
  components: {
    PokemonCard
  }
})
export default class PokemonList extends Vue {
  repository: Pokemon[] = [];
  loadState: PromiseState = PromiseState.INIT;
  limit = 20;
  offset = 0;

  get hasPokenMon() {
    return this.repository.length > 0;
  }
  async mounted() {
    await this.loadNextPage();
  }

  async loadPrevPage() {
    this.repository = [];
    try {
      for (let id = this.offset; id > this.offset - this.limit; id--) {
        Pokedex.getPokemonByName(id).then(pokemon => {
          this.repository.push(pokemon);
          this.repository.sort(
            (pokemon1, pokemon2) => pokemon1.id - pokemon2.id
          );
        });
      }
      this.offset = Math.max(0, this.offset - this.limit);
      console.log(this.repository);
    } catch (error) {
      console.error(error);
    }
  }

  async loadNextPage() {
    this.repository = [];
    try {
      // const page = [];
      for (let id = this.offset + 1; id <= this.offset + this.limit; id++) {
        // this.repository.push(await Pokedex.getPokemonByName(id));
        // page.push(poke);
        Pokedex.getPokemonByName(id).then(pokemon => {
          this.repository.push(pokemon);
          this.repository.sort(
            (pokemon1, pokemon2) => pokemon1.id - pokemon2.id
          );
        });
      }
      this.offset += this.limit;
      // this.repository = page;
      console.log(this.repository);
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
