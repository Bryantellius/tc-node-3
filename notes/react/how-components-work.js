class ReactGlobal {
  constructor(props) {
    this.props = props

    this.state = []
  }

  useState(initialState) {
    if(this.state[0]) {
      return [this.state[0].value, this.state[0].func]
    } else {
      this.state.push({ value: initialState, func: updateState})
      return [this.state[0].value, this.state[0].func]
    }
  }

  render() {
    console.log(this.state.value)
  }
}

const app = new App() // <App />

app.render() // 1

app.state.value = 2

app.render() // 2

function AppFunc(props) {
  let value = 1

  setTimeout(() => (value = 2), 5000) // asynchronous

  console.log(value)
}

AppFunc() // 1

// after 5 seconds when value changes...

AppFunc() // 1
