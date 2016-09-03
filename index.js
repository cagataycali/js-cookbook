// var text = "hello"
// console.log(text);
//
// // function loop(k, callback) {
// //   for (var i = k; i < 500; i++) {
// //     console.log(i);
// //   }
// //   return i;
// // }
// function loop(k, callback) {
//   a = 0;
//   for (var i = k; i < 500; i++) {
//      a = a + 1;
//   }
//   return a;
// }
//
// loop(400, function(output) {
//   console.log('Last param', output);
// })
// console.log('hi');


var request = require('request');

function req(url, callback, error) {
  request('https://google.com', function(error, response, body) {
    if (!error && response.statusCode === 200) {
      callback(body);
    } else {
      error(error);
    }
  });
}

req('https://google.com', function(output) {
  console.log(output);
}, function(error) {
  console.log(error);
});

function loop(callback, error) {
  try {
    for (var i = 0; i < 500; i++) {
      console.log(i);
    }
    callback(i)
  } catch (e) {
    error(e)
  }
}

loop(function(output) {
  console.log('Last', output);
}, function(error) {
  console.log(error);
})

//
// function loop(k) {
//   a = 0;
//   for (var i = k; i < 500; i++) {
//      a = a + 1;
//   }
//   return a;
// }
//
// console.log(loop(100));
