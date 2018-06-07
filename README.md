
# Methods for Standardization, Normalization

[![Build Status](https://travis-ci.org/cmaurer/nrml.svg?branch=master)](https://travis-ci.org/cmaurer/nrml)

## Methods

### MinMax

<a href="https://www.codecogs.com/eqnedit.php?latex=Xnorm&space;=&space;\frac{X&space;-&space;Xmin}{Xmax&space;-&space;Xmin}" target="_blank">
 <img src="https://latex.codecogs.com/gif.latex?Xnorm&space;=&space;\frac{X&space;-&space;Xmin}{Xmax&space;-&space;Xmin}" title="Xnorm = \frac{X - Xmin}{Xmax - Xmin}" /></a>

example:
```javascript
const nrml = require('nrml')
const minmax = nrml.minmax
let arr = [1, 2, 3, 4, 5, 6]
let minMaxArr = minmax(arr)
```

which results in the following array

```
[ 0, 0.2, 0.4, 0.6, 0.8, 1 ]
```

### Standardization (z-score normalization)

<a href="https://www.codecogs.com/eqnedit.php?latex=Xnorm&space;=&space;\frac&space;{X&space;-&space;\overline{X}&space;}{\sigma&space;}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?Xnorm&space;=&space;\frac&space;{X&space;-&space;\overline{X}&space;}{\sigma&space;}" title="Xnorm = \frac {X - \overline{X} }{\sigma }" /></a>

example:
```javascript
const nrml = require('nrml')
const standard = nrml.standard
let arr = [35,36,46,68,70]
let standardArr = standard(arr)

```

which results in the following array

```
[ -0.9411764705882353, -0.8823529411764706, -0.29411764705882354, 1, 1.1176470588235294 ]
```

### Binary



### Decimal



## Utility Functions

### min
### max
### mean
### sum
### sd
### variance
### zscore
### diff
