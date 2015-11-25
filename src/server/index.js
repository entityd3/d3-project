import prompt from 'prompt';

function askTheQuestion() {
  console.log(`
 1. quack
 2. bark
 3. meow
 3.14159265.PIE!
`);

  prompt.get('option', (err, res) => {
    switch (res.option) {
      case '1':
        console.log('quack');
        break;
      case '2':
        console.log('bark');
        break;
      case '3':
        console.log('meow');
        break;
      default:
        console.log("I don't know how to do that");
        break;
      case '3.14159265':
        console.log('PIE!');
        break;
    }

    askTheQuestion();
  });
}

askTheQuestion();
