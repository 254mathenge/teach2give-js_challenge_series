// 1.Sum of two numbers
function add(a, b) {
  return a + b;
}
console.log(add(3, 2));
console.log(add(-4, -8));
console.log(add(-3, 5));

//2.Return the next number from the number passed

function nextNumber(num) {
  return num + 1;
}
console.log(nextNumber(1));
console.log(nextNumber(0));
console.log(nextNumber(-2));

//3.Find perimeter of a rectangle
function rectanglePerimeter(length, width) {
  return 2 * (length + width);
}
console.log(rectanglePerimeter(2, 5));
console.log(rectanglePerimeter(3, 5));
console.log(rectanglePerimeter(10, 20));

// 4.Return something to me

function returnSomethingToMe(str) {
  return "something" + " " + str;
}

console.log(returnSomethingToMe("is better than nothing"));
console.log(returnSomethingToMe("jack daniels"));
console.log(returnSomethingToMe("pinocchio"));

//5.Bob's BMI vs Jane's BMI

function greaterBMI(firstBob, secondJane) {
  if (firstBob > secondJane) {
    return "Bob";
  } else if (secondJane > firstBob) {
    return "Jane";
  } else {
    return "Equal";
  }
}
console.log(greaterBMI(30, 25));
console.log(greaterBMI(35, 40));
console.log(greaterBMI(35, 35));

//6.Basketball points

function basketballPoints(twoPointer, threePointer) {
  return twoPointer * 2 + threePointer * 3;
}
console.log(basketballPoints(1, 1));
console.log(basketballPoints(7, 5));
console.log(basketballPoints(0, 5));

// 7.Less than 100
function isSumMoreThan100(num1, num2) {
  if (num1 + num2 > 100) {
    return true;
  } else {
    return false;
  }
}
console.log(isSumMoreThan100(25, 55));
console.log(isSumMoreThan100(72, 38));

// 6.Convert minutes to second

function convertToSeconds(numberOfMinutes) {
  let seconds = numberOfMinutes * 60;
  if (seconds == 0) {
    return 0;
  } else if (seconds == 1) {
    return "1 second ";
  } else {
    return seconds + " seconds";
  }
}

console.log(convertToSeconds(5));
console.log(convertToSeconds(0));
console.log(convertToSeconds(1));

//8.Greater among the three
function greater(num1, num2, num3) {
  if (num1 || num2 || num3) {
    return Math.max(num1, num2, num3);
  } else {
    return any;
  }
}
console.log(greater(2, 35, 9));
console.log(greater(23, 23, 23));

//9.Less among the three
function least(num1, num2, num3) {
  if (num1 || num2 || num3) {
    return Math.min(num1, num2, num3);
  } else {
    return any;
  }
}
console.log(least(2, 35, 9));
console.log(least(23, 23, 23));

//10.Football points

function footballPoints(gamesWon, gamesDrawn, gamesLost) {
  let footballPoints = gamesWon * 3 + gamesDrawn * 1 + gamesLost * 0;
  return footballPoints;
}
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 2));
console.log(footballPoints(5, 2, 0));

//11.Even numbers

function isEven(num) {
  return num % 2 == 0;
}
for (let i = 0; i <= 101; i++) {
  if (isEven(i)) {
    console.log(i + ": true");
  } else {
    console.log(i + ": false");
  }
}
