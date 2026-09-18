//hello
function findCommonInThreeArrays(arr1, arr2, arr3) {
  const common = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
          common.push(arr1[i]);
        }
      }
    }
  }
  return common;
}
