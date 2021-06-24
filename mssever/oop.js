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

  greet(name) {
    return `Hello, ${name}!`;
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = 'Full Stack Web Developer';
  }

  greet(name) {
    let str = '';
    if(name) {
      str = `I won't use your name, ${name}. `;
    }
    return str + 'Hello world!';
  }
}

function report_greeting(speaker, listener) {
  return `${speaker.name} says "${speaker.greet(listener)}"`
}

var general_person = new Person('Joe', 2, 'apartment',
                                ['guitar', 'photography', 'travel']);
var coder = new Coder('Bob', 0, 'mountaintop', ['python', 'javascript']);

console.log(general_person.info());
console.log(report_greeting(general_person, 'Ben'),'\n');
console.log(coder.info());
console.log(report_greeting(coder, 'Alice'));
