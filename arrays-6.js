const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] % 2 === 0) {
    console.log(numArray[i]);
  }
}

let i = 0;

while (i < numArray.length) {
  if (numArray[i] % 2 !== 0) {
    console.log(numArray[i]);
  }
  i++;
}
