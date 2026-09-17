
function findDuplicates(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
function findDuplicates(arr) { const seen = new Set(); const duplicates = new Set(); for (const item of arr) { if (seen.has(item)) { duplicates.add(item); } else { seen.add(item); } } return Array.from(duplicates); }
      if (i !== j && arr[i] === arr[j]) {
        if (!duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
  }

  return duplicates;
}//hi//
