'use latest';
const request = require('request-promise');
module.exports = (context, cb) => {

  let name = (context.data.text || 'Olivia');

  request({
    uri: `https://montanaflynn-gender-guesser.p.mashape.com/?name=${name}`,
    method: 'GET',
    headers: {
      'Accept': 'text/plain',
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Mashape-Key': '4G2eK7FRV4mshLHHuvgFaa9TW2Msp10PsQRjsnlcpejMZa35WY'
    }
  }).then((response) => {
      cb(null, response);
    })
    .catch((err) => console.error(err));

};
