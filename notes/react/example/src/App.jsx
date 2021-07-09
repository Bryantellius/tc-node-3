import { Component } from 'react'
import './App.css'
import Blog from './views/Blog'

class App extends Component {
  constructor() {
    super()

    this.state = {
      hasLoaded: false,
      list: [],
      score: {
        home: 0,
        away: 0,
      },
      num: 4,
    }
  }

  doSomething() {
    this.setState({
      score: {
        home: this.score.home + 1,
        away: this.state.away,
      },
    })
  }

  render() {
    return <Blog />
  }
}

export default App
