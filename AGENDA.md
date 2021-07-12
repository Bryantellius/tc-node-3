# July 12, 2021

## To Do

1. Review React Components, Hooks
2. Cover React Hooks Quiz
3. Start React Router Lecture
4. Work on React Router Exercise
5. React Router Hooks
6. React Router Hooks Exercise

## React Hooks

- Replicate (similiar, not exact) functionality from class components in functional components
- Hooks are used in functional components, CANT BE USED IN CLASS COMPONENTS
- **Effect** hook, used for performing side-effects in our components
  - Extends lifecycle method functionality from classes to functional components
  - Combines the code for `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`
  ```
  React.useEffect(() => {
      // execute after each render
  }, [state])
  ```
- **State** hook, used for extending 'state' management within functional components
  ```
  let [state, setState] = React.useState(initialValue);
  ```
