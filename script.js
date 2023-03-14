const arr = [
  "Lorem",
  "ipsum",
  ["dolor", ["sit", "amet"], "consectetur"],
  ["adipiscing"],
  "elit",
];
const printLorem = (loremArray) => {
  for (let i = 0; i < loremArray.length; i++) {
    if (typeof loremArray[i] === "string") {
      const words = loremArray[i].split(" ");
      console.log(words[0]);
    } else if (Array.isArray(loremArray[i])) {
      printLorem(loremArray[i]);
    }
  }
};

printLorem(arr);
