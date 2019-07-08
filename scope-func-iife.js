
var foo = 'foo';

(function bob() {
  var foo = 'foo2';
  console.log(foo); // 'foo2'
})();

console.log(foo); // 'foo' 

(function IIFE(bar) {
  console.log(bar); // 'foo'
})(foo);
