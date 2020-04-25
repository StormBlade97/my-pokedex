<template>
  <div
    class="card"
    :class="{ 'is-shadowless': !hover }"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card-image has-text-centered">
      <img
        :src="pokemon.sprites.front_default"
        alt="pokemon front image"
        class="image is-128x128 margin-centered"
      />
    </div>
    <div class="card-content">
      <p class="title is-6 is-capitalized">{{ pokemon.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: ["pokemon"]
})
export default class PokemonCard extends Vue {
  hover = false;
}
</script>

<style lang="scss">
.margin-centered {
  margin: auto;
}
</style>
