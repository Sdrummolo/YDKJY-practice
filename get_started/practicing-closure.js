// The range(..) function takes a number as its first argument, representing the first number in a desired range of numbers. The second argument is also a number representing the end of the desired range (inclusive). If the second argument is omitted, then another function should be returned that expects that argument.

function range(start, end) {
  let result = []

  if (end !== undefined) {
    for (let i = start; i <= end; i++) {
      result.push(i)
    }
    console.log(result)
  } else {
    return function (end) {
      for (let i = start; i <= end; i++) {
        result.push(i)
      }
      console.log(result)
    }
  }
}
