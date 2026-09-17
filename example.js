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
//ho nhi rha yar kya kru oh yea
// acha

