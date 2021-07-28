function toInitialCapital(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// Array slice vs splice

const nums = [1, 2, 3, 4, 5];

// Return a random value from this array of nums?

nums[Math.floor(Math.random() * nums.length)] // random value from the array

const subNums = nums.slice(1, 4); // [2, 3, 4]

const removedNums = nums.splice(2, 1); // [3], changes the existing array to [1, 2, 4, 5]

// Finding the keys of an object

const applicant = {
  firstname: "Ben",
  lastname: "Bryant",
  city: "Hoover",
  resume: "resume.pdf",
  apply: function () {
    // ...
  },
};

Object.keys(applicant); // ["firstname", "lastname", "city", "resume"]

// Finding the values of an object

Object.values(applicant); // ["Ben", "Bryant", "Hoover", "resume.pdf"]

// Find the key/value pair of an object

Object.entries(applicant); // [["firstname", "Ben"], ["lastname", "Bryant"], ["city", "Hoover"], ["resume", "resume.pdf"]]

for (let [key, value] of Object.entries(applicant)) {
  console.log(key, value);
}
