const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let accumulator = 0;

for (let i = 0; i < numArray.length; i++) {
//   if (numArray[i] > 0) {
    accumulator += numArray[i];
//   }
}
console.log(accumulator);
