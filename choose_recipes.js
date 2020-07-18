/*
Complete a function called chooseRecipe(), which will receive three parameters: 
- An array of ingredients in stock at Bakery A 
- An array of ingredients in stock at Bakery B 
- An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

We are limiting our search to two ingredient recipes. 

We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.

Our chooseRecipe() function should return the name of the correct recipe.

There will always be a single correct answer, and you will NOT need to consider special cases. 
For example, you do NOT need to worry about cases where one bakery has BOTH the ingredients for a recipe.

TEST INPUTS!!!
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

EXPECTED OUTPUTS:
Persian Cheesecake
Nima's Famous Dijon Raisins

NOTES:
We might want to start by creating a helper function called ingredientCheck() that will take 
in one bakery at a time, along with the recipes.ingredients array to check if 
the given bakery possesses any of the ingredients from that recipe.

There will always be a single correct answer, and you will NOT need to consider special cases. 
For example, you do NOT need to worry about cases where one bakery has BOTH the ingredients for a recipe.

*/

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // local function for checking recipes object

  // loop through bakeryA array and check each ingredient
  // build a string for 1st successful match

  // loop through bakeryA array and check each ingredient
  // build a string for 1st successful match

  // return the builtup matched recipies string
}