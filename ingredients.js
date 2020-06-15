const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let l = 0; l < ingredients.length; l++) {
  console.log(ingredients[l]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let n = ingredients.length - 1;
//console.log(n);
while (n >= 0) {
  console.log(ingredients[n]);
  n--;
}