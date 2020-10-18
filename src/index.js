/**
 * map
 */
const nameArray = ["nobita", "jaian", "suneo"];

// usage
const mappedArray = nameArray.map((name) => {
  return name;
});
console.log(mappedArray);

nameArray.map((name, index) => console.log(`index: ${index} name: ${name}`));

/**
 * filter
 */
const numArray = [1, 2, 3, 4, 5];
const filteredArray = numArray.filter((num) => {
  return num % 2 === 1;
});
console.log(filteredArray);
