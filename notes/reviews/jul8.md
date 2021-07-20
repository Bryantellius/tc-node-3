# July 8th, 2021

1. Cover React Lifecycle Quiz
2. Work on React Game Project
3. Cover React Hooks Lecture
4. Work on React Hooks Exercise

## Lifecycle of React Components

### Initial Stages of the Component Lifecycle

1. Creation - `constructor()`

```
constructor(props) {
  super(props)

  this.state = {
    score: 0,
    list: [],
  }
}
```

2. Render - `render()`

```
render() {
  return (
    <div>
      <button>Click Me!</button>
    </div>
  )
}
```

3. Mount - `componentDidMount()`

```
async componentDidMount() {
  let res = fetch("...");
  let data = await res.json();
  ...
}
```

### Update Stages after State is changed

4. Re-render `render()`
5. Update `componentDidUpdate()`

### Death Stage

6. Unmount `componentWillUnmount()`
