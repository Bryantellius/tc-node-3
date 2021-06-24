class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  info() {
    return `Name:\t\t${this.name}\nNum. pets:\t${this.pets}\nResidence:\t${this.residence}\nHobbies:\t${this.hobbies.join(', ')}`;
  }

  greet() {
    return 'Hello, person!';
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = 'Full Stack Web Developer';
  }
  greet() {
    return 'Hello world!';
  }
}

var general_person = new Person('Joe', 2, 'apartment', ['guitar', 'photography'])
var coder = new Coder('Bob', 0, 'mountaintop', ['python', 'javascript'])

console.log(general_person.info());
console.log(`${general_person.name} says "${general_person.greet()}"`,'\n');
console.log(coder.info());
console.log(`${coder.name} says "${coder.greet()}"`);
