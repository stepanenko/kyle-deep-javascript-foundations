
var foo = 'foo';

function bob() {
  var foo = 'foo2';
  console.log(foo); // 'foo2'
}

bob();

console.log(foo); // 'foo' 
