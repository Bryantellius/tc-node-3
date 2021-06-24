class CookBook {
  constructor() {
    this.recipes = [];
  }

  addRecipe(recipe) {
    this.recipes.push(recipe);
  }

  read(recipe) {
    if (recipe) {
      let found;
      this.recipes.forEach(function (value) {
        if (value.name == recipe) {
          found = value;
        }
      });
      if (found) {
        found.displayIngredients();
        found.displayDirections();
      } else {
        console.log("Could not find the recipe you were looking for :(");
      }
    } else {
      this.recipes.forEach(function (recipe, idx) {
        console.log(`${idx + 1} | ${recipe.name}`);
      });
    }
  }
}

module.exports = CookBook;
