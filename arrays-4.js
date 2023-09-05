const stringArray = [
  "JavaScript",
  "two",
  "Java",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "Cotlin",
  "Phitone",
];

let i = 0;

while (i < stringArray.length) {
  if (stringArray[i].length > 3) {
    console.log(stringArray[i]);
  }

  i++;
}
