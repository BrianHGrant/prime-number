var checkprimes = function(primeNumber, inputNumber, inputArray) {
  // alert(primeNumber);
  // alert(inputNumber);
  // alert(inputArray);
  var index = primeNumber + primeNumber;
  var incrementNumber = primeNumber
  for (index; index <= inputNumber; index = index + incrementNumber) {
    inputArray.splice(inputArray.indexOf(index), 1);
    alert(inputArray);
  }
  alert(inputArray);
  return inputArray;
}

$(document).ready(function(event) {
  $("#blank-form").submit(function(event) {
    var userNumber = parseInt($("input#userInput").val());
    // alert (userNumber);
    var numberArray = [];
    for(index=2; index<=userNumber; index++) {
      numberArray.push(index);
      // alert(numberArray);
    }
    var prime = 2;
    var newArray1 = checkprimes(prime, userNumber, numberArray);
    prime = 3;
    var newArray2 = checkprimes(prime, userNumber, newArray1);
    prime = 5;
    var newArray3 = checkprimes(prime, userNumber, newArray2);
    prime = 7;
    var newArray4 = checkprimes(prime, userNumber, newArray3);
    alert(newArray4);
    event.preventDefault();
  });
});
