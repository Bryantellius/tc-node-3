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

module.exports = Recipe;
