import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  //function to map the array of pokemons passed down
  //returns each pokemon as a Pokemon card component
  //passes down the pokemon into the pokemondcard componenet
  //invokes the filterPokemon function as the array of pokemon that needs to be rendered
  renderAllPokemons = () => {
    return this.filterPokemon().map(pokemon => {
      return <PokemonCard pokemon={pokemon} />
    })
  }

  //takes the input from that search, passed down from PokemonIndex
  //uses a filter function to return the pokemons that matches the user input values
  filterPokemon = () => {
    return this.props.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.props.input)
    })
  }

  //invokes the renderAllPokemons in the render
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderAllPokemons()}
      </Card.Group>
    )
  }

}

export default PokemonCollection
