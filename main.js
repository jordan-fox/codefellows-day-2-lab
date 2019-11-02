prompt('What is your name?');
//question 1
var age = prompt("Am i over 40?").toLowerCase();
//console.log('age', age);
if (age === 'no' || age === 'n') {
  alert('you are right');
}
else {
  alert('nop i am still young!');
}
//question 2
var place = prompt('Do i leave in US?').toLocaleLowerCase();
//console.log('yes', place);
if (place === 'yes' || place === 'y') {
  alert('yes you got it!!');
}
else {
  alert('you are missing seattle!!');
}
// question 3
var status = prompt('Am i married?').toLowerCase();
//console.log('still looking ', status);
if (status === 'no' || status === 'n') {
  alert('still looking the right one');
}
else {
  alert('nope not yet!!');
}
//question 4
var kids = prompt('Do i have children?').toLowerCase();
console.log('you got it', kids);
if (kids === 'no' || kids === 'n') {
  alert('you got it');
}
else {
  alert('not yet!!');
}

// question 6
var favoritenum = prompt('guess my favorite number?');

for (let i = 1; i <= 4; i++); {

  if (favoritenum === 7) {
    alert('yea how do you know it!!');
  }
  if (favoritenum > 7) {
    alert('too high');
  }
  if (favoritenum < 7) {
    alert('too low');
  }

//alert('Thank you for participating!!');