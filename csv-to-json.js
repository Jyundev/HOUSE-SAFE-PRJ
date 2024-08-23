/** 
 * csv 파일 json 형태로 변환
 * 실행 : node csv-to-json.js
*/


const filePath = 'assets/data/institutions.csv';
const jsonPath= 'assets/data/institutions.json'

const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // BOM 제거
  const cleanData = data.replace(/^\uFEFF/, '');

  // CSV 데이터를 파싱
  const stream = require('stream');
  const readableStream = new stream.Readable();
  readableStream._read = () => {}; // no-op
  readableStream.push(cleanData);
  readableStream.push(null);

  readableStream
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2));
    });
});
