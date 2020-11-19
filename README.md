# mathematica

A JavaScript package for mathematical operations.

---

[installation](##installation)

[example](##example)

[documentation]()

---

## installation

```txt
npm i mathematica
```

## example

```js
const mathematica = require("mathematica");

const square = new mathematica.Square(10);
console.log(square);
// expected: Square { length = 10, width = 10 }
// getters: area, perimeter, diagonal
```
