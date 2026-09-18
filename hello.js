function printHello() {
  console.log("He!");
}

function printGoodbye() {
  console.log("Goodbye!");
}

module.exports = { printHello, printGoodbye };

function findDuplicates(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(item => set2.has(item)))];
}
  return duplicates;
}

module.exports = { printHello, printGoodbye, findDuplicates };
