# Intersect-rect
[![Code Climate](https://codeclimate.com/github/Barry127/intersect-rect/badges/gpa.svg)](https://codeclimate.com/github/Barry127/intersect-rect)
[![Test Coverage](https://codeclimate.com/github/Barry127/intersect-rect/badges/coverage.svg)](https://codeclimate.com/github/Barry127/intersect-rect/coverage)

Intersect-rect is a tiny module to check if two DOM elements intersect (overlap).

## Install

Intersect-rect can be installed using npm:

```bash
npm install --save intersect-rect
```

Loading intersect-rect using common JS:

```javascript
var intersectRect = require('intersect-rect');
```

#### AMD / Browser

Intersect-rect also works out of the box in the browser or with AMD module loaders.

## Example

```javascript
var intersectRect = require('intersect-rect');

var elementA = document.getElementById('elementA');
var elementB = document.getElementById('elementB');

var rectA = elementA.getBoundingClientRect();
var rectB = elementB.getBoundingClientRect();

if (intersectRect(rectA, rectB)) {
  console.log('elementA and elementB overlap!');
} else {
  console.log('elementA and elementB do not overlap!');
}
```
