console.clear();

// using loop
const array1 = [1, 2, 3, 2, 4, 5, 6, 4, 7, 8, 9, 3]

const uniqueValue = []

for(let i = 0; i < array1.length; i++){
  if(!uniqueValue.includes(array1[i])){
    uniqueValue.push(array1[i])
     }
}
console.log(uniqueValue);

// using Set


const array2 = [1, 2, 3, 2, 4, 5, 6, 4, 7, 8, 9, 9];

const uniqueArray = [...new Set(array2)];

console.log(uniqueArray);
