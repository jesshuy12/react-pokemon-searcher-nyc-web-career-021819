import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  //form submit event which gathers up all the input values from the forms and sets it as a pokemon
  //invokes the addPokemon fucntion that got passed down with the pokemon that was created
  handleSubmit = (event) => {
    event.preventDefault()
    const pokemon = {name: this.state.name, stats: [{value: this.state.hp, name: "hp"}], sprites: {front: this.state.frontUrl, back: this.state.backUrl}}
    this.props.addPokemon(pokemon)
    this.setState ({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  //event handler to track the users inputs into the form
  handleChange = (event) => {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group onChange={this.handleChange} widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
