<template>
  <h1>Quién es este pokémon?</h1>

  <!-- TODO: img -->
  <PokemonPicture
    :pokemonId="4"
    :showPokemon="true" />

  <!-- TODO: Opciones -->
  <PokemonOptions />

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  }

}
</script>
