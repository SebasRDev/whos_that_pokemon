import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'


describe ('PokemonPicture component', () => {

  test('should math with the snapshot', () => {
    const wrapper = shallowMount( PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false
      }
    } )

    expect( wrapper.html() ).toMatchSnapshot()
  })

  test('should show the hidden image y el pokemon 100', () => {
    const wrapper = shallowMount( PokemonPicture, {
      props:{
        pokemonId: 100,
        showPokemon: false
      }
    })

    const [mask, img] = wrapper.findAll('img')

    expect( mask.exists() ).toBeTruthy()
    expect(img).toBe(undefined)
    expect( mask.classes('hidden-pokemon') ).toBeTruthy()

    expect( mask.attributes('src') ).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
  })

  test('should show the pokemon if showPokemon is true', ()=>{
    const wrapper = shallowMount( PokemonPicture, {
      props:{
        pokemonId: 100,
        showPokemon: true
      }
    })

    const img = wrapper.find('img')

    expect( img.exists() ).toBeTruthy()
    expect( img.classes('fade-in') ).toBeTruthy()
  
  })

})