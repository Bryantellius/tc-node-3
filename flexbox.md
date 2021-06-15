# June 15th, 2021

## Flexbox

```
div.flex-container {
    display: flex;
    flex-direction: (row|row-reverse|column|column-reverse);
    justify-content: (flex-start|flex-end|center|space-around|space-between);
    align-items: (flex-start|flex-end|center|stretch);
    flex-wrap: wrap;
}

div.flex-item {
  flex-grow: 2;
  flex-shrink: 2;
  align-self: (flex-start|flex-end|center|stretch);
}
```

- Properties

  1. `display` determines flex behavior on the containing element
  2. `flex-direction` determines primary alignment (main axis) of sub elements (flex-items)
  3. `justify-content` determines flex-item positioning on the main axis
  4. `align-items` determines flex-item positioning on the cross axis
  5. `align-self` determines a single flex-item's positioning on the cross axis
  6. `flex-grow` expands the width of a flex-item inside the flex-container based on the space available
  7. `flex-shrink` shrinks the width of a flex-item inside the flex-container based on the space available
  8. `flex-wrap` wraps flex-items if the space available on a row cannot contain them without distortion
