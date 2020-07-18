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

DD: delberately did not invest in robust error checking or computational optimization given the one time and emergency nature of these requirements
*/

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let aBakeryRecipes = ingredientCheck(bakeryA);
  let bBakeryRecipes = ingredientCheck(bakeryB);
  let foundRecipe = '';
  
  // local function for checking recipes object
  function ingredientCheck(ingredients) {
    let bakeryRecipes =  [
      /*{
        name: '',
        ingredient: ''
      }*/
    ]; 
    // each ingredient provided
    for (let i = 0; i < ingredients.length; i++) {
      // each recipe
      for (let r = 0; r < recipes.length; r++) {
        // each recipe ingredient
        for (let ri = 0; ri < recipes[r].ingredients.length; ri++) {
          // check matches of provided ingredient to recipe ingredient
          if (recipes[r].ingredients[ri] === ingredients[i]) {
            // add recipe match to array of possible recipes
            bakeryRecipes.push(recipes[r].name, recipes[r].ingredients[ri]);
            console.log('Match found');
            console.log(bakeryRecipes);
            /* bakeryRecipes.push[i].name = recipes[r].name
            console.log('bakeryRecipes.name:')
            console.log(bakeryRecipes.name);
            bakeryRecipes[i].ingredients = recipes[r].ingredients[ri];
            console.log('bakeryRecipes.ingredients: ');
            console.log(bakeryRecipes.ingredients); */
          }
        }
      }
    }
    return bakeryRecipes;
  }

  // loop through possible bakery recipes for each bakery and find matches
  for (let a = 0; a < aBakeryRecipes.length; a++) { // Bakery A
    //console.log(aBakeryRecipes);
    for (let b = 0; b < bBakeryRecipes.length; b++) { // Bakery B
      if (aBakeryRecipes[a] === bBakeryRecipes[b]) { // Check for recipe match
        return aBakeryRecipes[a]; // return match
      }
    }
  }
  // if we made this far, then there no matching recipes
  return 'No matching recipes for ingredients found!';
}


// provided test input code:
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

//console.log(chooseRecipe(bakeryA, bakeryB, recipes));