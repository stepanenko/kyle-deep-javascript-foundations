
for (var i = 0; i < 5; i++) {
  (function IIFE() {
    var j = i;
    // console.log(j);
  })();
}

console.log(j); // not defined
console.log(i); // 5
