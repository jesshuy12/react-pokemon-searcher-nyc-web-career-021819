import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  //creates state to determine if user clicked the Pokemoncard
  //state of toggle is always true
  state = {
    toggle: true
  }

  //event handler to setState when a click occurs
  //sets the state to the opposite of previous state
  handleClick = () => {
    this.setState ({
      toggle: !this.state.toggle
    })
  }

  //contains a ternary that is linked to the state to determine which side of the pokemon is shown, front or back
  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
           {this.state.toggle ? <img alt="oh no!" src={this.props.pokemon.sprites.front}/> : <img alt="oh no!" src={this.props.pokemon.sprites.back}/>}
            <img/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {this.props.pokemon.stats.find(stat => stat.name === 'hp').value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
