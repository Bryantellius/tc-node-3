function printOdds(up_to) {
  let output = [];
  for (let i=1; i<=up_to; i+=2) {
    output.push(i);
  }
  console.log(output.join(', '));
}
printOdds(325);

/* In Python:

def print_odds(up_to):
    print(', '.join([i for i in range(1, up_to+1, 2)]))

print_odds(312)
*/

function checkAge(userName, age) {
  if (userName === undefined || age === undefined) {
    throw 'You must call this functions with all parameters.';
  }
  let out = (age < 16) ? `Sorry, ${userName}. You can't drive.` : `Congrats ${userName}. You can drive.`
  console.log(out)
}
checkAge('Scott');