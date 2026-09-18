function printHello() {
  console.log("Hello!");
}

function printGoodbye() {
  console.log("Goodbye!");
}

module.exports = { printHello, printGoodbye };

function findDuplicates(arr1, arr2) {
  const duplicates = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        duplicates.push(arr1[i]);
      }
    }
  }
  return duplicates;
}

module.exports = { printHello, printGoodbye, findDuplicates };// hi
