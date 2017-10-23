const strings = [
  'Everything_Now (Continued)', 
  'Everything Now', 
  'Signs of Life', 
  'Put Your Money on Me'
];

strings.sort((a, b) => b.length - a.length);
const longest = strings.map(str => str.length)[0];

strings.forEach(str => console.log(str.padStart(longest)));