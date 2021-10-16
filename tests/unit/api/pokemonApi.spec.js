import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => {

  test('axios debe estar configurado con el api de pokemonApi', () => {
    
    expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    
  })

})