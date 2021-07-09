import { Component } from 'react'
import './App.css'
import Colors from './views/Colors'

class App extends Component {
  constructor() {
    super()

    this.state = {
      colors: ['#000000', '#FFFFFF', '#0094c8'],
    }

    this.randomHex = this.randomHex.bind(this)
    this.handleRandomizer = this.handleRandomizer.bind(this)
  }

  randomHex() {
    let r = Math.round(Math.random() * 255).toString(16)
    let g = Math.round(Math.random() * 255).toString(16)
    let b = Math.round(Math.random() * 255).toString(16)

    return `#${r}${g}${b}`
  }

  handleRandomizer(e) {
    let colors = this.state.colors.map(this.randomHex)
    this.setState({ colors })
  }

  render() {
    return (
      <>
        <button onClick={this.handleRandomizer}>Randomize</button>
        {this.state.colors.map((color, idx) => (
          <Colors color={color} key={idx} />
        ))}
      </>
    )
  }
}

export default App
