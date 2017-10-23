const answers = [
  'It is certain', 
  'No!', 
  'Without a doubt', 
  'Yes - definitely', 
  'You may rely on it', 
  'Try again', 
  'Better not tell you now', 
  'Yes',
  'Concentrate and ask again'];

function magic8(question) {
  return new Promise((resolve, reject) => {
    if (!question || question.length === 0) {
      reject('That is not a valid question');
    }
    const time = getRandomInt(300, 2000);
    const answer = getRandomAnswer();
    setTimeout(() => resolve(`${question}: ${answer}`), time);
  });
}

async function main() {
  const p1 = magic8('Will I learn JavaScript?');
  const p2 = magic8('Will I learn C#?');
  
  const [res1, res2] = await Promise.all([p1, p2]);
  console.log(res1);
  console.log(res2);
}

main();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomAnswer() {
  return answers[getRandomInt(0, answers.length - 1)];
}