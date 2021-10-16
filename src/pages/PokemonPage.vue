<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>Whos that pokemon?</h1>

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
        {{ buttonMessage }}
      </button>
    </template>

    <div class="score">
      SCORE: {{ score }}
    </div>
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
        message: '',
        buttonMessage: '',
        score: 0
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
          this.score += 1
          this.buttonMessage = 'Continuar'
        }else{
          this.message = `Ooops fallaste, era ${this.pokemon.name}`
          this.score = 0
          this.buttonMessage = 'Nuevo Juego'
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

<style scoped>
  .score {
      font-weight: bold;
      font-size: 32px;
      line-height: 40px;
      position: fixed;
      bottom: 30px;
      right: 30px;
  }
</style>