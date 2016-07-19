const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kittens;
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(kitten) {
  var new_array = kittens.slice()
  new_array.push(kitten);
  return new_array;
}

function prependKitten(kitten) {
  var new_array = kittens.slice()
  new_array.unshift(kitten);
  return new_array;
}

function removeLastKitten() {
  var new_array = kittens.slice();
  new_array.pop();
  return new_array;
}

function removeFirstKitten() {
  var new_array = kittens.slice();
  new_array.shift();
  return new_array;
}
