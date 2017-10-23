const answers = [
  'It is certain', 
  'No!', 'Without a doubt', 
  'Yes - definitely', 
  'You may rely on it', 
  'Try again', 
  'Better not tell you now', 
  'Yes',
  'Concentrate and ask again'
];

function magic8(question) {
  return new Promise((resolve, reject) => {
    if (!question || question.lenth === 0) {
      reject('This is not a valid question');
    }

    const time = getRandomInt(300, 2000);
    const answer = getRandomAnswer();
    setTimeout(() => resolve(`${question}: ${answer}`), time);
  });
}

magic8('Will I learn JavaScript?').then(res => {
  console.log(res);
  return magic8('Will I learn C#?');
}).then(res => {
  console.log(res);
  return magic8('Will I learn Python?');
}).then(res => {
  console.log(res);
  return magic8();
}).then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
  console.error('Something happened');
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomAnswer() {
  return answers[getRandomInt(0, answers.length - 1)];
}