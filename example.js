
function findDuplicates(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        if (!duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
  }

  return duplicates;
}//hi//
