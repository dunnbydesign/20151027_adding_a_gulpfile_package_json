module.exports.greet = function (name) {
  return 'hello ' + name
}

function reportInput () {
  var input = process.argv[2]
  if (input === undefined) {
    return 'No input provided'
  } else {
    return 'Input: ' + input
  }
}

module.exports.reportInput = reportInput
