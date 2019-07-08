
function repeat(fn, n) {
  var result;

  for (let i = 0; i < n; i++) {
    result = fn();
  }

  return result;
}

function hello() {
  console.log('hello world');
}

repeat(hello, 3);
