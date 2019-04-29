import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  //sets state of index to hold all the pokemons
  //sets state for user input from the search bar
  state = {
    pokemons: [],
    input: ''
  }

  //fetch function to get all the data from the database
  getPokemons = () => {
    fetch(`http://localhost:3000/pokemon`)
    .then(response => response.json())
    .then(data => {
      this.setState ({
        pokemons: data
      })
    })
  }

  //fetch function to add pokemon into the database
  //adds the pokemon into the state
  addPokemon = (pokemon) => {
    fetch(`http://localhost:3000/pokemon`, {
      method: 'POST',
      body: JSON.stringify(pokemon),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(pokemon => {
      this.setState ({
        pokemons: [...this.state.pokemons, pokemon]
      })
    })
  }

  //triggers the fetch when Component mounts
  componentDidMount() {
    this.getPokemons()
  }

  //grabs the users input from the search bar
  handleSearch = (event) => {
    this.setState ({
      input: event.target.value
    })
  }

  render() {
    console.log(this.state.input)
    return (
      <div>
        <h1>MOEW MOEW MOEW MOEW MOEW MOEW</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} input={this.state.input} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
