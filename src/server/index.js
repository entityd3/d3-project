import readline from 'readline';
import Chance from 'chance';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const chance = new Chance();

function go() {
  rl.question('What sort of math question do you want? (+, -, *, /) ', op => {
    console.log(`You picked ${op}`);

    const arg1 = chance.integer({min: 0, max: 100});
    const arg2 = chance.integer({min: 0, max: 100});

    rl.question(`${arg1} ${op} ${arg2} = `, answer => {
      console.log(`You said ${answer}`);

      // answer is a string, but to compare it, we need it to be an int
      // parseInt() converts a string to an int.
      answer = parseInt(answer);

      switch (op) {
      case '+':
        const expected = arg1 + arg2;

        if (answer === expected) {
          console.log('Good Job =)');
        } else {
          console.log(`Nice Try. It should have been ${expected}`);
        }
        break;
      case '-':
        break;
      case '*':
        break;
      case '/':
        break;
      default:
        break;
      }

      go();
    });
  });
}

go();
