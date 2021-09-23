import pokemonApi from "../api/pokemonApi";

const getPokemons = () => {

  const pokemonsArray = Array.from( Array(650) );
  return pokemonsArray.map( (_,index) => index + 1 )

}

const getPokemonOptions = async() => {

  const mixedPokemons = getPokemons()
                          .sort( () => Math.random() - 0.5 )
                          .splice(0,4);

  const pokemonData = await getPokemonNames( mixedPokemons.splice(0, 4) )
  return pokemonData

}

const getPokemonNames = async([a,b,c,d] = []) => {

  const arrPromises = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ]

  const [p1, p2, p3, p4] = await Promise.all( arrPromises )

  return [
    {name: p1.data.name, id: p1.data.id},
    {name: p2.data.name, id: p2.data.id},
    {name: p3.data.name, id: p3.data.id},
    {name: p4.data.name, id: p4.data.id},
  ]
          


}

export default getPokemonOptions;

