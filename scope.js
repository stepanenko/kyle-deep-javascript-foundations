
// 'use strict';

var foo = 'bar';

function bar() {
  var foo = 'baz';
}

function baz(foo) {
  foo = 'bam';
  bam = 'yay';
}

baz(1); // if in strict mode: 'ReferenceError: bam is not defined'
console.log(bam); // yay
