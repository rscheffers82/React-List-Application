var personA = ['Andrew', 25];
var personB = ['Zorana', 23];

var greet = function (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet( ...personA );

var names = ['Mike', 'Ben'];
var final = ['Roy'];
