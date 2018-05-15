const fs = require('fs');

const myFile = fs.readFileSync('./stops.txt', 'utf8');

const array = myFile.split('\n');

const onlyStops = [];

array.forEach((item) => {
  const str = item.replace(/\(.*\)/, '');
  const val = str.trim();
  const output = `\n"${val}"`;
  if (val && !onlyStops.includes(output)) {
    onlyStops.push(output);
  }
});

fs.writeFileSync('stops.js', onlyStops);
