class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  displayInfo() {
    let formattedHobbies = "";
    this.hobbies.forEach(function (val, idx, arr) {
      if (arr.length > 1 && idx == arr.length - 1) {
        formattedHobbies += `and ${val}`;
      } else {
        formattedHobbies += val;
      }
    });
    console.log(
      `${this.name} has ${this.pets} pets, lives in ${
        this.residence
      }, and enjoys ${formattedHobbies.join(", ")}.`
    );
  }

  greet(name) {
    console.log(`Hello ${name}!`);
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies, occupation) {
    super(name, pets, residence, hobbies);
    this.occupation = occupation;
  }

  greet(name) {
    console.log(`${name}, what's on your mind?`);
  }
}

let ben = new Person("Ben", 0, "Hoover", [
  "coding",
  "running",
  "reading",
  "watching the NBA",
]);

let seth = new Coder(
  "Seth",
  0,
  "Birmingham",
  ["gaming", "coding"],
  "Web Developer"
);

ben.greet(seth.name);
seth.greet(ben.name);
