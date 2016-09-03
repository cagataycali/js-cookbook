var async = require('async');
var request = require('request');

/* Callbacks */
function loop(k, callback, error) {
  try {
    for (var i = k; i < 500; i++) {
      console.log(i); // Runned first.
    }
    callback(i + 1); // Runned second
  } catch (e) {
    error(e)
  } finally {
    console.log('loop func runned.'); // Runned forth.
  }
}

loop(100, function (output) {
  console.log('Function output', output); // Runned third
}, function (error) {
  console.log('Error', error);
});
/* Callbacks */

/* Promises */
function looper(k) {
  return new Promise(function(resolve, reject) {
    request('https://google.com', function(error, response, body) {
      if (!error && response.statusCode === 200) {
        resolve(body)
      } else {
        reject(error)
      }
    });
  });
}

looper(100)
  .then((value) => {console.log(value);})
  .catch((err) => {console.log(err);})
/* Promises */
