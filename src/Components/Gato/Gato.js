import React, { Component } from 'react'

const Gato = (props) => (
  <div>
    <h1>Gato 🐈</h1>
    {/* los datos se convierten a string */}
    <pre>
      { JSON.stringify(props, null, 4 ) }
    </pre>
  </div>
)

class App extends Component {
  state = {
    fuerza: 100,
    vidasRestantes: 7,
    name: 'Chimicuil'
  }

  render () {
    const otrosDatos = {
      raza: 'tropical',
      peleasNocturnas: 300
    }
    const masdatos={
      raza:"raza reemplazada"

    }
    /* react usa object asign por lo cual se reemplazaran los atributos */
    return (
      <div>
        <Gato
          name='Garfield'
          age='2 años'
          { ...otrosDatos }
          { ...this.state }
          {...masdatos}
        />
      </div>
    )
  }
}

export default App
