//INPUT: V,V,V,S,C,C
//OUTPUT: {V: 3, S: 1, C: 2}

//call function to count occurrence of each flavor
function countFrequencies(flavorsArray) {
  const flavorCounts = {};
//loop thru array to count each flavor
  for (let flavor of flavorsArray) {
    flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
  }  
  return flavorCounts;
}

//prompt user to enter froyo flavors separated by commas
const userInputString = prompt("Enter your froyo flavors below:", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
//split string into array of strings & call function
if (userInputString) {
  const flavorsArray = userInputString.split(",");
  const flavorCounts = countFrequencies(flavorsArray);
  console.log("Flavor order summary: ");
  console.table(flavorCounts); 
}