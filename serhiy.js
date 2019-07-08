'strict mode';

a = 2;
console.log(a); // 2
var a;

{
  let str = 'hello';
  // let str = 'bar'; // SyntaxError: Identifier 'str' has already been declared
}
// console.log(str); // not defined error

{
  var str2 = 'world';
  var str2 = 'happy'; // so we can redeclare a var
}
console.log(str2); // 'happy'
