import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'

import { mockPokemons } from '../mocks/pokemons.mock'

describe('Pokemon Options Component', ()=>{

  let wrapper

  beforeEach(()=>{
    wrapper = shallowMount( PokemonOptions, { 
      props: {
        options: mockPokemons
      }
    })
  })

  test('should do match with snapshot', ()=>{

    expect( wrapper.html() ).toMatchSnapshot()

  })

  test('should have 4 options', ()=>{

    const liTags = wrapper.findAll('li')
    
    expect(liTags.length).toBe(4)
    
    
    expect( liTags[0].text() ).toBe('pikachu')
    expect( liTags[1].text() ).toBe('charmander')
    expect( liTags[2].text() ).toBe('venusaur')
    expect( liTags[3].text() ).toBe('mew')
    
  })
  
  test('should emit "selectedPokemon" with parameters at click', ()=>{

    const [li1, li2, li3, li4] = wrapper.findAll('li')

    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')

    expect( wrapper.emitted('selectedPokemon').length ).toBe(4)


    expect( wrapper.emitted('selectedPokemon')[0] ).toEqual([5])
    expect( wrapper.emitted('selectedPokemon')[1] ).toEqual([4])
    expect( wrapper.emitted('selectedPokemon')[2] ).toEqual([3])
    expect( wrapper.emitted('selectedPokemon')[3] ).toEqual([100])

  })

})