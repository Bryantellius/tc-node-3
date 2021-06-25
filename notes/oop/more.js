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

class Recipe {
  constructor(name, category, ingredients, duration, directions, servings) {
    this.name = name;
    this.category = category;
    this.ingredients = ingredients;
    this.duration = duration;
    this.directions = directions;
    this.servings = servings;
    this.rating = null;
  }

  rate(liked, total) {
    this.rating = `${liked}/${total}`;
  }

  displayIngredients() {
    this.ingredients.forEach(function (value) {
      console.log(`${value.measurement} of ${value.name}`);
    });
  }

  displayDirections() {
    console.log(this.directions);
  }
}

let cookbook = new CookBook();

cookbook.addRecipe(
  new Recipe(
    "Pancakes",
    "Breakfast",
    [
      { name: "milk", measurement: "1 cup" },
      { name: "eggs", measurement: "2 whole eggs" },
      { name: "flour", measurement: "2 cups" },
    ],
    "10 minutes",
    "These are the directions ... blah. Now you have pancakes! Enjoy!",
    4
  )
);
cookbook.addRecipe(
  new Recipe(
    "Steak",
    "Dinner",
    [
      { name: "meat", measurement: "1 whole" },
      { name: "seasoning", measurement: "cover" },
    ],
    "30 minutes",
    "These are the directions ... blah. Now you have Steak! Enjoy!",
    1
  )
);
cookbook.addRecipe(
  new Recipe(
    "BLT",
    "Lunch",
    [
      { name: "Bacon", measurement: "3 whole strips (9 pieces)" },
      { name: "Lettuce", measurement: "to taste" },
      { name: "Tomato", measurement: "5 slices" },
    ],
    "15 minutes",
    "These are the directions ... blah. Now you have blt! Enjoy!",
    1
  )
);

cookbook.read("Pancakes");
