function isEven(x){
  if (x % 2 === 0){
    return true;
  }else{
    return false;
  }
}

function factorial(x){
  var i, product;
  product = x;
  for (i = x-1; i > 0; i--){
    product *= i;
  }
  return product;
}

var num = prompt("Enter a number: ");
alert(factorial(num));
