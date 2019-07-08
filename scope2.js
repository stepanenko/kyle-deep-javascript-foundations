
// 'use strict';

var foo = 'bar';

function bar() {
  var foo = 'baz';

  function baz(foo) {
    foo = 'bam';
    bam = 'yay'; // Error: bam is not defined if in strict mode
  }
  baz();
}

bar();
console.log(foo);
console.log(bam);
// baz(); // error
