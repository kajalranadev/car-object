//  var is a function scoped
function testFunction() {
  var age = 18;
  if (age === 18) {
    console.log(age);
  }

}
console.log(age);
testFunction();
