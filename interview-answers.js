class QandA {
  constructor(q, a) {
    this.q = q;
    this.a = a;
  }

  evaluateAnswer(a) {
    return a === this.a;
  }

  displayQ() {
    return this.q;
  }
}

class BlankQandA extends QandA {
  displayQ() {
    return this.q.replace(this.a, "_".repeat(this.a.length));
  }
}

const data = [
  new BlankQandA(
    "var, let, and const are three declaration keywords for variables in JavaScript.",
    "const"
  ),
  new QandA(
    "What language (although there are numerous) is considered significantly more usable than common C#?",
    "javascript"
  ),
  new QandA("What arithmetic operator for division remainder?", "%"),
];

let currentIndex = 0;

const feedback = document.querySelector("#feedback");
const answer = document.querySelector("#answer");
const prompt = document.querySelector("#prompt");
const submit = document.querySelector("#submit");

prompt.textContent = data[currentIndex].displayQ();
submit.addEventListener("click", (e) => {
  const a = answer.value;
  feedback.textContent = data[currentIndex++].evaluateAnswer(a);

  setTimeout(() => {
    feedback.textContent = "...";
    prompt.textContent =
      data[
        currentIndex < data.length ? currentIndex : (currentIndex = 0)
      ].displayQ();
    answer.value = "";
    answer.focus();
  }, 3000);
});
