/*
 * Write a function that joins the contents of conceptList together
function(list) {
for (let i = 0; i < conceptList.length; i++) {
   newString = 
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
*
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

const joinList = function(array) {
  let newstring = "";
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      newstring = newstring + array[i];
    } else {
      newstring = newstring + array[i] + ", ";
    }
  }
  return newstring;
};

const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
