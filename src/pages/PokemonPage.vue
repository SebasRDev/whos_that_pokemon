<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>Quién es este pokémon?</h1>

    <!-- TODO: img -->
    <PokemonPicture
      :pokemon-id="pokemon.id"
      :show-pokemon="showPokemon" />

    <!-- TODO: Opciones -->
    <PokemonOptions 
      :options="pokemonsData"
      @selected-pokemon="checkAnswer"
    />

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">
        Nuevo Juego
      </button>
    </template>

  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {
    PokemonPicture,
    PokemonOptions,
  },
  data() {
    return {
      pokemonsData: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray(){
      this.pokemonsData = await getPokemonOptions()

      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonsData[ rndInt ]
    },
    checkAnswer( selectedId ) {
      this.showPokemon = true;
      this.showAnswer = true;

      if( selectedId === this.pokemon.id){
        this.message = `Correcto, es ${this.pokemon.name}!!`
      }else{
        this.message = `Ooops fallaste, era ${this.pokemon.name}`
      }
    },
    newGame(){
      this.pokemonsData = []
      this.showPokemon = false
      this.showAnswer = false
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted(){
    this.mixPokemonArray()
  }
}
</script>
