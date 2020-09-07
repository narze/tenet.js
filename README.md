# Tenet.js

Inverts the entropy of objects

## Why?

To rewind the flow of time, and save the world, somehow.

## Usage

- Initialize `Tenet` object

```javascript
const obj = Tenet(1) // or `new Tenet(1)`
```

- Apply function to the object

```javascript
obj.apply(x => x + 1)
obj.value // 2
```

- Invert the object

```javascript
obj.invert()
obj.value // 1
```
