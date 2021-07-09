const people = [
  { name: 'Ben', color: 'Red' },
  { name: 'Tanner', color: 'Blue' },
]

const [ben, tanner] = people

// ben == {name: "Ben", color: "Red"}
// tanner == {name: "Tanner", color: "Blue"}

const props = {
  title: 'Welcome to React!',
  handleInput: (event) => {
    // do something
  },
}

const { title } = props

// title == "Welcome to React!"

// Define a function two ways:

// Assign a function to a variable

const add = (x, y) => {
  return x + y
}

// Declare a function

function add(x, y) {
  return x + y
}
