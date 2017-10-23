const answers = [
  'It is certain', 
  'No!', 'Without a doubt', 
  'Yes - definitely', 
  'You may rely on it', 
  'Try again', 
  'Better not tell you now', 
  'Yes',
  'Concentrate and ask again'];

function magic8(question) {
  return new Promise((resolve, reject) => {
    if (question.length === 0) {
      reject('That is not a valid question');
    }
    const time = getRandomInt(300, 2000);
    const answer = getRandomAnswer();
    setTimeout(() => resolve(`${question}: ${answer}`), time);
  });
}

async function main(name) {
  console.log(`start for ${name}`);
  const res = await magic8('Will I learn JavaScript?');
  console.log(res);
  const res2 = await magic8('Will I learn C#?');
  console.log(res2);
  const res3 = await magic8();
  console.log(res3);
  const res4 = await magic8('Will I learn C++?');
  console.log(res4);
  console.log('end');
};

function catchError(fn) {
  return function(...args) {
    return fn(...args).catch(err => {
      console.error('Something happened');
    });
  }
}

const newMain = catchError(main);
newMain('Enrique');


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomAnswer() {
  return answers[getRandomInt(0, answers.length - 1)];
}