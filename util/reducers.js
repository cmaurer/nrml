

const maximumAbsoluteValue = (accumulator, currentValue) => {
  if (typeof currentValue === 'number') {
    currentValue = Math.abs(currentValue)
    if (currentValue > accumulator) {
      return currentValue
    }
  }
  return accumulator
}

const maximumValue = (accumulator, currentValue) => {
  if ((typeof currentValue === 'number') && (currentValue > accumulator)) {
    return currentValue
  } else if ((typeof currentValue !== 'number') && (typeof accumulator !== 'number')) {
    return undefined
  }
  return accumulator
}

/*
  Finds the minimum number in an Array.
  Different from the Math.min:
    - accepts arrays of mixed types, will only operate on numeric values
    - type checking

*/
const minimumValue = (accumulator, currentValue) => {
  if ((typeof currentValue === 'number') && (currentValue < accumulator)) {
      return currentValue
  } else if ((typeof currentValue !== 'number') && (typeof accumulator !== 'number')) {
      return undefined
  }
  return accumulator
}

const sum = (accumulator, currentValue) => {
  if(typeof currentValue === 'number') {
    return accumulator + currentValue
  }
  return accumulator
}

module.exports = {
  sum: sum,
  minimumValue: minimumValue,
  maximumValue: maximumValue,
  maximumAbsoluteValue: maximumAbsoluteValue
}
