
function diff(x, y) {
  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }

  return y - x;
}

console.log(diff(4, 2)); // 2
