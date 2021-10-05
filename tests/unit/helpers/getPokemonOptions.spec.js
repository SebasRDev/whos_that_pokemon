import { getPokemons } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions',()=>{

  test('debe de regresar un array de numeros', () => {
    const pokemons = getPokemons()

    expect(pokemons.length).toBe(650)
    expect(pokemons[0]).toBe(1)
    expect(pokemons[500]).toBe(501)
    expect(pokemons[649]).toBe(650)

  })

  test('debe retornaar un array de 4 elementos con nombres de pokemons', ()=>{

  })

  test('getPokemonOptions debe retornar un array mezclado', ()=>{

  })

})