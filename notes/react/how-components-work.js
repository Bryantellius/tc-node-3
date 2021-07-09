class App {
  constructor(props) {
    this.props = props

    this.state = {
      value: 1,
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
