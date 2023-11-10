const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('school_master_table.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results.length);

    const jsonData = JSON.stringify(results, null, 2);

fs.writeFile('data.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error('Error writing JSON file:', err);
  } else {
    console.log('JSON file has been saved!');
  }
});
  });

