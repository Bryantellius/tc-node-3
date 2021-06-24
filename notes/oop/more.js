const CookBook = require("./classes/Cookbook");
const Recipe = require("./classes/Recipe");

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
