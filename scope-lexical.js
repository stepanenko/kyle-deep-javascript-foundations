// theoretical dynamic scoping:
function foo() {
  console.log(bar); // ReferenceError: bar is not defined
}

function baz() {
  var bar = 'bar';
  foo();
}

baz();
